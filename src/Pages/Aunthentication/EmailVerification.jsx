import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emailVerificationProcess } from '../../Redux/Authentication/authSlice'


const EmailVerification = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userSignupData ,isSuccess} = useSelector(state=>state.auth)
    // const {token} = useParams()
    // const {id} = useParams()
    // const { isloading,isVerification } = useSelector(state => state.user)
    // const verificationData = {token:token,id:id}

    if(isSuccess){
      navigate("/")
    }
  
  return (
    <Box className = "emailVerification">
        <Box className = "verificationPopup">
            <p>Click on the button below for email verification...</p>
            <Button
              variant="contained"
              className="loginButton"
              sx={{
                fontFamily: "Laila, serif",
                marginTop: "4vh",
                width: "50%",
                backgroundColor:"black",
                border:"1px solid black",
                fontWeight:"bold",
                fontSize:"2vh",
                "&:hover":{
                    backgroundColor:"white",
                    border:"1px solid black",
                    color:"black",
                    
                }
              }}
              onClick={()=>{
                const verificationData = {
                  id: userSignupData.id,
                  token:userSignupData.emailVerificationTOken
                }
                console.log(verificationData,"verification data")
                dispatch(emailVerificationProcess(verificationData))
              }}
            >
              Verify Email
            </Button>
            {/* {isloading?<Loading />:<p style={{marginTop:"17px"}}></p>} */}

        </Box>
    </Box>
  )
}

export default EmailVerification