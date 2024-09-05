import React from 'react'
import Header from '../../Components/Header'
import { Box } from '@mui/material'
import SideNavbar from '../../Components/SideNavbar'

const Layout = ({children}) => {
  return (
    <div>
        <Box>
        <Header/>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <SideNavbar/>
        
        </Box>

    </div>
  )
}

export default Layout