import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Component}) => {
    const token = localStorage.getItem("token")
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