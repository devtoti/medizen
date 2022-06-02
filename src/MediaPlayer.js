import { useState, useEffect } from "react";
import useSound from "use-sound";
import gong from "./components/audios/gong-start.mp3";
import pop from "./components/audios/pop.mp3";
import Fab from "@mui/material/Fab";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

export default function MediaPlayer({ isPlaying, setIsPlaying, timer, setTimer }) {

  const [playGong, { stop }] = useSound(gong, { volume: 0.5 });
  const [playPop] = useSound(pop, { volume: 0.5 });

  // let seconds = Math.floor((timer) % 60);
  // let minutes = Math.floor((timer / 60) % 60);
  // let hours = Math.floor((timer / (60 * 60)) % 24);

  // function zPadFormat(num) {
  //   const zNum = num.toString().length;
  //   if (zNum <= 1) {
  //     return "0" + num;
  //   } else {
  //     return num;
  //   }
  // }

  // useEffect(() => {
  //   console.log(isNaN(timer));
  //   console.log(seconds, minutes, hours);
  // }, [timer]);

  useEffect(() => {
    if (isPlaying && timer > 0) {
      const currTimer = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(currTimer);
      };
    } else if (timer == 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timer]);

  function handleClick(e) {
    const { name } = e.target;
    switch (name) {
      case "forward":
        setTimer((c) => c + 30);
        console.log("+30 seconds added");
        break;

      case "backwards":
        if (timer >= 30) {
          setTimer((c) => c - 30);
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
    setTimer(newTime);
  }

  return (
    <div className="media-player">
      <form>
        <select defaultValue="Select meditation time" onChange={handleChange}>
          <option defaultValue="0">Select meditation time</option>
          <option value="300">5 min</option>
          <option value="900">15 min</option>
          <option value="1800">30 min</option>
        </select>
      </form>
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
