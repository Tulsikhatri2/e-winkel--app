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
  const { userSignupData, isVerification } = useSelector((state) => state.auth);

  const handleVerification = () => {
    const verificationData = {
      id: userSignupData.id,
      token: userSignupData.emailVerificationTOken
    };
    dispatch(emailVerificationProcess(verificationData));
    dispatch(clearUserSignupData())
  }

  useEffect(()=>{
    if(isVerification){
      navigate("/")
    }
    else{
      toast.error('Email not verified', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
      }
  },[isVerification])
  
  useEffect(()=>{
    if(!userSignupData){
      navigate('/register')
    }
  },[userSignupData])

  return (
    <Box className="emailVerification">
      <Box className="verificationPopup">
        <p>Click on the button below for email verification...</p>
        <Button
          variant="contained"
          className="loginButton"
          sx={{
            fontFamily: "Laila, serif",
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
      </Box>
    </Box>
  );
};

export default EmailVerification;
