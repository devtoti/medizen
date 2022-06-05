import { useState, useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Dialog from "@mui/material/Dialog";


export default function MediaPlayer({ isPlaying, setIsPlaying, timer, setTimer, playGong, playPop, setOpenSettings}) {


  const [openDialog, setOpenDialog] = useState(false)
  const [customMinutes, setCustomMinutes] = useState(0)
  const [customSeconds, setCustomSeconds] = useState(0)
  const [customTime, setCustomTime] = useState(false)

  useEffect(() => {
    console.log('minutes_', customMinutes)
    console.log('seconds_', customSeconds)
  }, [customMinutes, customSeconds])


  //corre al detonarse isPlaying
  useEffect(() => {

    const userTimer = parseFloat(customMinutes) * 60 + parseFloat(customSeconds)
    if (customTime) {
      userTimer > 3600 ? setTimer(3600) : setTimer(userTimer)
    }
    if (isPlaying && timer > 0) {
      setOpenSettings(false)
      const currTimer = setInterval(() => {
        setCustomTime(false)
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(currTimer);
      };
    } else if (timer == 0 && isPlaying) {
      playPop()
      setIsPlaying(false);
    }
    // console.log('now is_/', customTime)
  }, [isPlaying, timer, handleCustomMinutes, handleCustomSeconds]);

  function handleClick(e) {
    const { name } = e.target;
    switch (name) {
      case "forward":
        setTimer((c) => c + 15);
        console.log("+30 seconds added");
        break;

      case "backwards":
        if (timer >= 15) {
          setTimer((c) => c - 15);
          console.log("-30 seconds to timer");
        } else {
          setTimer(0)
        }
        break;

      case "play":
        setIsPlaying((p) => !p);
        if (!isPlaying && timer > 0) {
          playGong();
        } else {
          stop();
          playPop();
        }

        break;

      case "reset":
        setTimer(0);
        setIsPlaying(false);
        break;
    }
  }

  function handleChange(e) {
    let newTime = parseInt(e.target.value);
    if (isNaN(newTime)) {
      console.log('custom time')
      setOpenDialog(true)

    } else {
      console.log(newTime)
      setTimer(newTime);
    }
  }

  function handleCustomMinutes(e) {
    setCustomMinutes(e.target.value)
    console.log(customTime)
    setCustomTime(true)
    // setCustomTime((prev) => prev + parseFloat(customMinutes))
  }
  function handleCustomSeconds(e) {
    setCustomSeconds(e.target.value)
    console.log(customTime)
    setCustomTime(true)
    // setCustomTime((prev) => prev + parseFloat(customSeconds))
  }


  // function handleCustomTime(e) {
  // e.preventDefault()
  // console.log(e)
  // const customTime = parseFloat(customMinutes) * 60 + parseFloat(customSeconds)
  // setTimer(customTime)
  // // setOpenDialog(false)
  // }

  return (
    <div className="media-player">
      <form>
        <select defaultValue="10" placeholder="Select meditation time" onChange={handleChange}>
          <option value="0">Select meditation time</option>
          <option value="300">Very short (5 min)</option>
          <option value="900">Short (15 min)</option>
          <option value="1800">Recommended (30 min)</option>
          <option value="custom">Custom...</option>
        </select>
      </form>
      <Dialog open={openDialog}>
        <div>
          <form>
            <label>Minutes: {customMinutes}</label>
            <input type="range" min="0" max="60" step="1" name="minutes" value={customMinutes} onChange={handleCustomMinutes}></input>
            <label>Seconds: {customSeconds}</label>
            <input type="range" min="0" max="60" step="5" name="seconds" value={customSeconds} onChange={handleCustomSeconds}></input>
            <button type="button" onClick={() => setOpenDialog(false)}>CLOSE</button>
          </form>
        </div>
      </Dialog>
      {/* onClick={() => setOpenDialog(false)} */}

      <div className="media-player-controls">
        <Fab
          name="backwards"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <Replay30Icon />
        </Fab>

        {!isPlaying || timer == 0 ? (
          <Fab
            name="play"
            type="button"
            onClick={handleClick}
            className="btn-play"
          >
            <PlayCircleFilledWhiteIcon />
          </Fab>
        ) : (
          <Fab
            name="play"
            type="button"
            onClick={handleClick}
            className="btn-play"
          >
            <PauseCircleFilledIcon />
          </Fab>
        )}
        <Fab
          name="forward"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <Forward30Icon onClick={handleClick} />
        </Fab>
      </div>
      {timer > 0 && (
        <Fab
          name="reset"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <SettingsBackupRestoreIcon />
        </Fab>
      )}
    </div>
  );
}
