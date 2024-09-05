import { AppBar, Box, Toolbar } from '@mui/material'
import logo from "../Assets/logo.PNG"
import React from 'react'

const Header = () => {
  return (
    
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ backgroundColor: "white" }} className="nav">
            <img
              src={logo}
              width="7%"
              height="80%"
              style={{ marginLeft: "5vw" }}
            />
          </Toolbar>
        </AppBar>
        
  )
}

export default Header 