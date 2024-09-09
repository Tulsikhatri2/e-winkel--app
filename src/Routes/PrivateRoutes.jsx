import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Component}) => {
    const {userToken} = useSelector(state=>state.auth)
  return (
    <div>
        {
            userToken?
            <Component/>:
            <Navigate to="/"/>
        }
    </div>
  )
}

export default PrivateRoutes