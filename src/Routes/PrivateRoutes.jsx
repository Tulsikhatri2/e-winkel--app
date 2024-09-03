import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Component}) => {
    const token = localStorage.getItem("token")
    // console.log(token,"token from private routes")
  return (
    <div>
        {
            token?
            <Component/>:
            <Navigate to="/"/>
        }
    </div>
  )
}

export default PrivateRoutes