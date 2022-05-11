import "./styles.css";
import MediaPlayer from "./MediaPlayer";
import Navigation from "./Navigation";
import MenuIcon from '@mui/icons-material/Menu';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';import GitHubIcon from '@mui/icons-material/GitHub';
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="App">
      <div
        onClick={() => setOpenDialog(true)}
        style={{ position: "absolute", top: "1ch", right: "1ch", zIndex: 1 }}
      >
        <MenuIcon />
      </div>
      <Dialog open={openDialog}>
        <div className="media-player dialog">
          <button type="button" name="close-btn" onClick={()=> setOpenDialog(false)}>&times;</button>
          <h2>Medizen.app was made in React</h2>
          <ul>
            <li >EXAMPLE</li>
          </ul>

          <h4>Contact</h4>
          <p>Antonio Ruiz</p>
          <div className="contact-icons">

          <GitHubIcon />
          <AlternateEmailIcon />
          </div>
        </div>
      </Dialog>
      <div className="medizen-app">
        <h1>Medizen</h1>
        <h2>Relax to the max</h2>
        <Navigation data="success" isPlaying={isPlaying} />
        <MediaPlayer setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      </div>
      <div class="background--custom"></div>
    </div>
  );
}
