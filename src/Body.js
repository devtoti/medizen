
import Clouds from './components/SVGs/Clouds'
import Meditation from './components/SVGs/Meditation'
import Quotes from './Quotes'
import quoteData from "./quotesData";


export default function AppBody({ timer, isPlaying,random }) {

  let seconds = Math.floor((timer) % 60)
  let minutes = Math.floor((timer / 60) % 60)
  let hours = Math.floor((timer / (60 * 60)) % 24)



  console.log(random)
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
      <div className="app-body-1">
      
        <div>
          <h1>Medizen</h1>
          <h3>Relax to the max</h3>
        </div>
  
        <div className="meditation" >
          <Clouds />
          <Quotes quotes={quoteData} />
          <Meditation />
        </div>
  
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
