import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Dialog from "@mui/material/Dialog";

export default function AppHeader() {


  const [openDialog, setOpenDialog] = useState(false);
  function handleClick() {
    // console.log('wroking')
    setOpenDialog(true)
  }
  return (
    <div className='app-header'>
      <div onClick={handleClick}>

        <HelpOutlineIcon />
      </div>
      <Dialog open={openDialog}>
        <div className='about-section'>
          <i id='close-icon' onClick={() => setOpenDialog(false)}>
          <CloseIcon />
          </i>
          <h2>Medizen.app was built in React by</h2>
          <h4>Antonio Ruiz</h4>
          <h3>Contact me</h3>
          <div>

          <i onClick={() => window.open("https://github.com/devtoti")}>
            <GitHubIcon />
          </i>
          <i onClick={() => window.location ="mailto:toti.webdev@gmail.com"}>
            <MailOutlineIcon />
          </i>
          </div>
        </div>
      </Dialog>
    </div>
  )
}