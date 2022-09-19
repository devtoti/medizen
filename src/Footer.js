import React from 'react'
import { Howl, Howler } from 'howler';
import MediaPlayer from "./MediaPlayer"
import AudioSettings from "./AudioSettings"
import { useState, useEffect } from "react";
import { VolumeUpIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import gong from "./components/audios/gong-start.mp3";
import pop from "./components/audios/pop.mp3";
import bell from "./components/audios/bell.mp3";
import zenbell from "./components/audios/zenbell.mp3";
import soundbowl from "./components/audios/soundbowl.mp3";
import AmbientForest from "./components/audios/ambient-forest.mp3";
import AmbientRain from "./components/audios/ambient-rain.mp3";
import AmbientSpring from "./components/audios/ambient-spring.mp3";

export default function AppFooter({ timer, setTimer, setIsPlaying, isPlaying }) {
    
    const { Howl, Howler } = require('howler');
    const [currAmbient, setCurrAmbient] = useState(AmbientForest)
    const [mute, setMute] = useState(false)
    const [openSettings, setOpenSettings] = useState(false);
    const [volumes, setVolumes] = useState({
        startGong: 0.5,
        middleGong: 0.5,
        endGong: 0.5,
        ambient: 0.25
    })


    var soundAmbient = new Howl({
        src: currAmbient,
        volume: volumes.ambient,
        html5: true
    });


    var soundPop = new Howl({
        src: pop,
        volume: 0.5
    });
    var endGong = new Howl({
        src: soundbowl,
        volume: volumes.endGong
    });
    
    var soundGong = new Howl({
        src: gong,
        volume: volumes.startGong,
        onend: function() {
            console.log('finish')
            
        },
        
    });
    const audios = {
        soundAmbient,
        soundGong,
        soundPop,
        endGong,
        currAmbient,
        setCurrAmbient,
        volumes,
        setVolumes
    }

    function muteAudio() {
        Howler.stop()
        setMute((prev) => !prev)
    }

    return (
        <div className='app-footer'>
            {openSettings && 
            <AudioSettings 
            audios={audios} />}
      
            <div className='app-footer-2'>
                <MediaPlayer
                    setIsPlaying={setIsPlaying} isPlaying={isPlaying}
                    timer={timer} setTimer={setTimer}
                    setOpenSettings={setOpenSettings}
                    openSettings={openSettings}
                    audios={audios}
                    
                    />
            </div>
            <div className='app-footer-3'>
            </div>
        </div>
    )
}