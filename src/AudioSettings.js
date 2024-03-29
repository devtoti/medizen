import React from 'react'
import { useState, useEffect } from 'react'
import Dialog from "@mui/material/Dialog";
import { VolumeUpIcon } from '@heroicons/react/outline'

function AudioSettings(props) {


    const {
        audios: { volumes, setVolumes, soundAmbient, soundGong, soundPop, AmbientForest, AmbientRain, AmbientSpring, setCurrAmbient, currAmbient } } = props



    const [ambientPlaying, setAmbientPlaying] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
 


    function handlePlay(e) {
        setAmbientPlaying(a => !a)
    }

    //actualiza el state para los volumenes de los sonidos
    function handleInput(e) {
        const { name, value } = e.target
        console.log(volumes)
        setVolumes((previous) => {
            return {
                ...previous,
                [name]: parseFloat(value)
            }
        })
        soundAmbient.volume(value)
    }

    //cambia la pista de audio
    function handleAmbientSounds(e) {
        setAmbientPlaying(false)
        console.log(e.target.value)
        if (e.target.value == undefined) {
           
        } else {
            
            soundAmbient.play()
        }
        setOpenDialog(false)
    }



    const audioSoundNames = [
        {
            label: 'Start Gong',
            id: 'startGong'
        },
        {
            label: 'Middle Gong',
            id: 'middleGong'
        },
        {
            label: 'End Gong',
            id: 'endGong'
        },
        {
            label: 'Ambient',
            id: 'ambient',
            min: 0,
            max: 0.5,
            step: 0.05
        },
    ]


    const AudioOptions = (arr1, arr2) => arr1.map((audio, ix) => {
        let id = audio.id
        const { min = 0, max = 1, step = 0.1 } = audio
        return <>
            <label key={ix}>{audio.label}</label>
            <div key={ix+1} className={audio.id}>
                <i onClick={() => setOpenDialog(true)}><VolumeUpIcon /></i>
                <input type="range" min={min} max={max} step={step} id={audio.id} name={audio.id} value={arr2[id]} onInput={(e) => handleInput(e)}></input>
            </div>
        </>
    })
    return (
        <div className='audio-settings'>
            {AudioOptions(audioSoundNames, volumes)}
            <Dialog open={openDialog}>
                <form onChange={(e) => handleAmbientSounds(e)}>
                    <select defaultValue="Select meditation time">
                        <option defaultValue="None">None</option>
                        <option data-mp3={AmbientSpring}>Spring</option>
                        <option data-mp3="f123">Forest</option>
                        <option data-mp3={AmbientRain}>Rain</option>
                    </select>
                </form>
            </Dialog>
         
            <h3>Coming soon...</h3>
        </div>
    )
}

export default AudioSettings
