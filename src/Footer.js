import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MediaPlayer from "./MediaPlayer"
import AudioSettings from "./AudioSettings"
import { useState, useEffect } from "react";
import { VolumeUpIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import useSound from "use-sound";
import gong from "./components/audios/gong-start.mp3";
import pop from "./components/audios/pop.mp3";

export default function AppFooter({ timer, setTimer }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [openSettings, setOpenSettings] = useState(true);
    const [volumes, setVolumes] = useState({
        startGong: 0.5,
        middleGong: 0.5,
        endGong: 0.5,
        ambient: 0.25
    })
    
    const [playGong, { stop }] = useSound(gong, { volume: volumes.startGong });
    const [playPop] = useSound(pop, { volume: volumes.endGong });
    
    useEffect(() => {
        console.log(volumes)
    }, [volumes])

    return (
        <div className='app-footer'>
            {openSettings && <AudioSettings useSound={useSound} volumes={volumes} setVolumes={setVolumes}/>}
            <div className='app-footer-1 fl-row' >
                <i id="btn-vol-up" onClick={(e) => console.log('working')}>
                    <VolumeUpIcon />
                </i>
                <i id="btn-vol-up" onClick={(e) => setOpenSettings(a => !a)}>
                    <AdjustmentsIcon />
                </i>
            </div>
            <div className='app-footer-2'>
                <MediaPlayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}
                    timer={timer} setTimer={setTimer} playGong={playGong}
                    playPop={playPop} setOpenSettings={setOpenSettings}/>
            </div>
            <div className='app-footer-3'>
                footer bottom
            </div>
        </div>
    )
}