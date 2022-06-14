import { useState, useEffect, useRef } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Dialog from "@mui/material/Dialog";
import { Howl, Howler } from 'howler';
import { VolumeUpIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


export default function MediaPlayer(props) {


  const {
    isPlaying,
    setIsPlaying,
    timer,
    setTimer,
    setOpenSettings,
    audios: { soundAmbient, soundGong, soundPop, endGong } } = props


  const [openDialog, setOpenDialog] = useState(false)
  const [mute, setMute] = useState(false)
  const [customMinutes, setCustomMinutes] = useState(0)
  const [customSeconds, setCustomSeconds] = useState(0)
  const [customTime, setCustomTime] = useState(false)
  

  function muteAudio() {
    Howler.stop()
    setMute((prev) => !prev)
}
  //corre al detonarse isPlaying
  useEffect(() => {

    const userTimer = parseFloat(customMinutes) * 60 + parseFloat(customSeconds)

    // console.log(id1)
    if (customTime) {
      userTimer > 3600 ? setTimer(3600) : setTimer(userTimer)
    }
    if (isPlaying && timer > 0) {
      // setOpenSettings(false)

      const currTimer = setInterval(() => {
        setCustomTime(false)
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(currTimer);
      };
    } else if (timer == 0 && isPlaying) {
      setIsPlaying(false);
      Howler.stop()
      endGong.play()
    }
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
          if (!mute) soundAmbient.play()
          soundGong.play()
        }
          break;
      case "stop":
        setIsPlaying((p) => !p);
          soundPop.play().volume(0.5)
          setTimeout(() => {
            Howler.stop()

          }, 1000)
        break;

      case "reset":
        setTimer(0);
        setIsPlaying(false);
        Howler.stop()
        soundPop.play()
        break;
    }
  }

  function handleChange(e) {
    let newTime = parseInt(e.target.value);
    if (isNaN(newTime)) {
      // console.log('custom time')
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


  return (
    <div className="media-player">
      <div className='app-footer-1 fl-row' >
       <i id={mute ? "btn-vol-off" : "btn-vol-up"} onClick={muteAudio}>
                    {mute ? <VolumeOffIcon /> : <VolumeUpIcon/>}
                </i>
      <form>
        <select defaultValue="10" placeholder="Select meditation time" onChange={handleChange}>
          <option value="0">Select meditation time</option>
          <option value="300">Very short (5 min)</option>
          <option value="900">Short (15 min)</option>
          <option value="1800">Recommended (30 min)</option>
        
          <option value="custom">Custom...</option>
        </select>
      </form>
                <i id="btn-vol-up" onClick={(e) => setOpenSettings(a => !a)}>
                    <AdjustmentsIcon />
                </i>
      </div>

      <Dialog open={openDialog}>
        <div className="custom-time">
          <form>
            <h3>Custom meditation time</h3>
            <label><span>{customMinutes}</span> Minutes</label>
            <input type="range" min="0" max="60" step="1" name="minutes" value={customMinutes} onChange={handleCustomMinutes}></input>
            <label><span>{customSeconds}</span> Seconds</label>
            <input type="range" min="0" max="60" step="5" name="seconds" value={customSeconds} onChange={handleCustomSeconds}></input>
            <button type="button" onClick={() => setOpenDialog(false)}>OK</button>
          </form>
        </div>
      </Dialog>
      {/* onClick={() => setOpenDialog(false)} */}

      <div className="media-player-controls">
        <button
          name="backwards"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <FastRewindIcon />
        </button>

        {!isPlaying || timer == 0 ? (
          <button
            name="play"
            type="button"
            onClick={handleClick}
            className="btn-play"
          >
            <PlayCircleFilledWhiteIcon />
          </button>

        ) : (
          <button
            name="stop"
            type="button"
            onClick={handleClick}
            className="btn-play"
          >
            <PauseCircleFilledIcon />
          </button>

        )}
        <button
          name="forward"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <FastForwardIcon onClick={handleClick} />
        </button>
      </div>
      {timer > 0 && (
        <button
          name="reset"
          type="button"
          onClick={handleClick}
          className="btn-time-nav"
        >
          <SettingsBackupRestoreIcon />
        </button>
      )}
    </div>
  );
}
