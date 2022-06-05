// import "./styles.css";
// import MediaPlayer from "./MediaPlayer";
import AppBody from "./Body";
import AppHeader from './Header'
import AppFooter from './Footer'
import { useState, useEffect } from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';import GitHubIcon from '@mui/icons-material/GitHub';
// import Dialog from "@mui/material/Dialog";
// import { useState } from "react";

export default function App() {
 

  const [timer, setTimer] = useState(3);

// useEffect(() => {
//   console.log(`timer is now ${timer/60}min`)
// }, [timer])

  return (
    <div className="App">
      <AppHeader />
        {/* <AppBody data="success" isPlaying={isPlaying} /> */}
        <AppBody timer={timer}/>
        <AppFooter timer={timer} setTimer={setTimer}/>
        <div class="background--custom"></div>
      </div>
  );
}

{/* <div
  onClick={() => setOpenDialog(true)}
  style={{ position: "absolute", top: "1ch", right: "1ch", zIndex: 1 }}
>
  <div> */}


      // <Dialog open={openDialog}>
      //   <div className="media-player dialog">
      //     <button type="button" name="close-btn" onClick={()=> setOpenDialog(false)}>&times;</button>
      //     <h2>Medizen.app was made in React</h2>
      //     <ul>
      //       <li >EXAMPLE</li>
      //     </ul>
      
      //     <h4>Contact</h4>
      //     <p>Antonio Ruiz</p>
      //     <div className="contact-icons">
      //     <a href="https://github.com/devtoti">
      //     <GitHubIcon />
      //       </a> 
      //     <a href="mailto:toti.webdev@gmail.com">
      //     <AlternateEmailIcon />
      //     </a>
      //     </div>
      //   </div>
      // </Dialog>