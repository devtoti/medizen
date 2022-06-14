
import AppBody from "./Body";
import AppHeader from './Header'
import AppFooter from './Footer'

import { useState } from 'react'


export default function App() {
 
const winHeight = window.innerHeight
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log(winHeight)

  return (
    <div className="App" id={isPlaying ? "active" : "inactive"} style={{height: winHeight}}>
      <AppHeader />
        <AppBody timer={timer} isPlaying={isPlaying}/>
        <AppFooter timer={timer} setTimer={setTimer} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <div class="background--custom"></div>
      </div>
  );
}
