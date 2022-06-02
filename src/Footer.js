import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MediaPlayer from "./MediaPlayer"
import AudioSettings from "./AudioSettings"
import { useState } from "react";
import { VolumeUpIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import useSound from "use-sound";


export default function AppFooter({ timer, setTimer }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <div className='app-footer'>
            {openSettings && <AudioSettings useSound={useSound}/>}
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
                    timer={timer} setTimer={setTimer} />
            </div>
            <div className='app-footer-3'>
                footer bottom
            </div>
        </div>
    )
}