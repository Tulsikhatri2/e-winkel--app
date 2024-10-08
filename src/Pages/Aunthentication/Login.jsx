import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { loginUser, loginWithGoogle } from "../../Redux/Authentication/authSlice";
import ForgotPassword from "../../Components/ForgotPassword/ForgotPassword";
import Loading from "../../Components/PageLoading/Loding";
import { GoogleLogin } from "@react-oauth/google";


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, userLoginData } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values))
      if(userLoginData){
        navigate("/dashboard/users")
      }
      else{
        navigate("/")
      }
    },
  });

  // useEffect(()=>{
  //   if(userToken){
  //     navigate("/dashboard/users")
  //   }
  //   else{
  //   navigate("/")
  //   }
  // },[userToken])
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const responseMessage = (response) => {
    console.log(response.credential);
    const googleCredential = {
      idToken: response.credential
    }
    dispatch(loginWithGoogle(googleCredential))
  };
  
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <Box className="background">
        <Box className="loginBox">
          <Box className="heading">
            <p style={{fontFamily: "Roboto Mono, monospace", marginTop:"2vh"}}>Login</p>
          </Box>

          <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
          <Box className="loginFields">
           
              <TextField
                variant="standard"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaCircleUser style={{ fontSize: "3vh" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Laila, serif",
                  },
                }}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              ></TextField>
              <TextField
                variant="standard"
                placeholder="Password"
                sx={{ marginTop: "2vh" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoIosLock style={{ fontSize: "3.5vh" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Laila, serif",
                  },
                }}
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              ></TextField>
              <Button
                variant="contained"
                type="submit"
                className="loginButton"
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  marginTop: "4vh",
                  width: "50%",
                }}
                >
                Login
              </Button>
            

            <Box className="loginLoader">
              {isLoading ? (
                <>
                  <Loading />
                </>
              ) : (
                <p></p>
              )}
            </Box>
            <p
              className="forgotPassword"
              onClick={handleClickOpen}
              style={{fontFamily: "Roboto Mono, monospace",}}
            >
              Forgot Password?
            </p>
            <ForgotPassword handleClose={handleClose} open={open}/>
          </Box>
          </form>
          <Box className="otherOptions" sx={{fontFamily: "Roboto Mono, monospace"}}>-Or Sign In With-</Box>

          <Box className="loginOptions">
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} shape="circle" />
          </Box>

          <Box className="registerOption" sx={{fontFamily: "Roboto Mono, monospace"}}>
            Not a user?
            <span
              className="registration"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
