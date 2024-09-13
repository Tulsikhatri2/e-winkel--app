import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = ({Component}) => {
    const {userToken} = useSelector(state=>state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
      if(!userToken){
        navigate("/")
      }
    })
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