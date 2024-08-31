import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { emailVerificationProcess } from '../Redux/Users/userSlice'
// import Loading from "../Pages/Loading"
import { useNavigate, useParams } from 'react-router-dom'
// import { toast, Flip, ToastContainer } from 'react-toastify'


const EmailVerification = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {token} = useParams()
    // const {id} = useParams()
    // const { isloading,isVerification } = useSelector(state => state.user)
    // const verificationData = {token:token,id:id}

    // if(isVerification){
    //   navigate("/loginUser")
    // }
  
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
            //   onClick={()=>{
            //     dispatch(emailVerificationProcess(verificationData))
            //   }}
            >
              Verify Email
            </Button>
            {/* {isloading?<Loading />:<p style={{marginTop:"17px"}}></p>} */}

        </Box>
    </Box>
  )
}

export default EmailVerification