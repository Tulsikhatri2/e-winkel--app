import { AppBar, Box, Toolbar } from '@mui/material'
import logo from "../Assets/logo.PNG"
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  
    useEffect(()=>{
    if(token){
      // window.location.reload()
      navigate("/dashboard/users")
    }
    else{
    navigate("/")
    }
  },[])

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