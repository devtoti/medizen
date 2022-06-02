import React from 'react'
import Gong from "./components/audios/gong-start.mp3";
import Pop from "./components/audios/pop.mp3";
import AmbientRain from "./components/audios/ambient-rain.mp3";
import { useState, useEffect } from 'react'

function AudioSettings({ useSound }) {

    const [ambientPlaying, setAmbientPlaying] = useState(false)
    const [playGong] = useSound(Gong, { volume: 0.3 });
    const [playPop] = useSound(Pop, { volume: 0.5 });
    
    // const [volumes, setVolumes] = useState({
    //     startGong: 0.5,
    //     middleGong: 0.5,
    //     endGong: 0.5,
    //     ambient: 0.5
    // })

    let ambient = volumes.ambient

    const [play, { stop }] = useSound(AmbientRain, {
        volume: ambient,
        loop: true,
        interrupt: false
    });

    function handleSound(e) {
        setAmbientPlaying(a => !a)
        console.log(ambientPlaying)
        // console.log('playing ambient with vol_', ambient)
    }
    
    
    useEffect(() => {
        console.log('uE', ambientPlaying)
        !ambientPlaying ? stop() :  play()
    }, [handleSound])


    function handleChange(e) {
        const { name, value } = e.target
        // console.log(name, value)
        setVolumes((previous) => {
            return {
                ...previous,
                [name]: parseFloat(value)
            }
        })
    }


    return (
        <div className='audio-settings'>
            <label for="starting-gong">Starting Gong</label>
            <input type="range" min="0" max="1" step="0.1" id="starting-gong" name="startGong" value={volumes.startGong} onChange={(e) => handleChange(e)}></input>
            <label for="middle-gong">Middle Gong</label>
            <input type="range" min="0" max="1" step="0.1" id="middle-gong" name="middleGong" value={volumes.middleGong} onChange={(e) => handleChange(e)}></input>
            <label for="end-gong">End Gong</label>
            <input type="range" min="0" max="1" step="0.1" id="end-gong" name="endGong" value={volumes.endGong} onChange={(e) => handleChange(e)}></input>
            <label for="ambient">Ambient</label>
            <input type="range" min="0" max="1" step="0.1" id="ambient" name="ambient" value={volumes.ambient} onChange={(e) => handleChange(e)}></input>
            <button onClick={handleSound}>{ambientPlaying ? "STOP" : "PLAY"}</button>
        </div>
    )
}

export default AudioSettings