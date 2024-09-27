import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserSignupData, clearVerificationData, emailVerificationProcess } from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/PageLoading/Loding";
import { Flip, toast } from "react-toastify";
import "./Authentication.style.css"

const EmailVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userSignupData, isVerification,isLoading } = useSelector((state) => state.auth);

  const handleVerification = () => {
    const verificationData = {
      id: userSignupData.id,
      token: userSignupData.emailVerificationTOken
    };
    dispatch(emailVerificationProcess(verificationData));
    navigate("/")
    dispatch(clearUserSignupData())
   
  }

  useEffect(()=>{
    if(!userSignupData){
      navigate('/register')
    }
  },[userSignupData])

  return (
    <Box className="emailVerification">
      <Box className="verificationPopup">
        <p style={{fontFamily: "Roboto Mono, monospace"}}>Click on the button below for email verification...</p>
        <Button
          variant="contained"
          className="loginButton"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            marginTop: "4vh",
            width: "50%",
            backgroundColor: "black",
            border: "1px solid black",
            fontWeight: "bold",
            fontSize: "2vh",
            "&:hover": {
              backgroundColor: "white",
              border: "1px solid black",
              color: "black",
            },
          }}
          onClick={() =>handleVerification()}
        >
          Verify Email
        </Button>
        {isLoading?
        <Loading/>
        :
        <p></p>
        }
      </Box>
    </Box>
  );
};

export default EmailVerification;
