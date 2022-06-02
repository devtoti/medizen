import medizen from "./components/imgs/medizen-logo.svg";
import Clouds from './components/SVGs/Clouds'
import Logo from './components/SVGs/Logo'
import PinkSun from './components/SVGs/PinkSun'
import Quotes from './Quotes'

export default function AppBody({ timer, isPlaying }) {

  let seconds = Math.floor((timer) % 60)
  let minutes = Math.floor((timer / 60) % 60)
  let hours = Math.floor((timer / (60 * 60)) % 24)

  function zPadFormat(num) {
    const zNum = num.toString().length;
    if (zNum <= 1) {
      return "0" + num;
    } else {
      return num;
    }
  }

  return (

    <div className='app-body'>
      <Quotes />
      <div className="app-body-1">
        {/* insertar iconos y state para animarlos */}
        <h1>Medizen</h1>
        <h2>Relax to the max</h2>
        <p>PINKSUN app-body</p>
        <p>CLOUDS app-body</p>
      </div>
      <div className="app-body-2">
        <h2 className={isPlaying ? "display-playing" : "display-paused"}>
          {zPadFormat(hours) +
            ":" +
            zPadFormat(minutes) +
            ":" +
            zPadFormat(seconds)}
        </h2>
      </div>
    </div>
  );
}
