import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/Loding";

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToken = localStorage.getItem('token')
  if (userToken) {
    navigate("/dashboard");
  }

  useEffect(()=>{
    // dispatch(userDisplay())
    if(localStorage.getItem("token")){
      navigate("/dashboard")
    }
    else{
    navigate("/")
    }
  },[])

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, "loginUSer")
      dispatch(loginUser(values))

    },
  });

  return (
    <>
      <Box className="loginBackground">
        <Box className="loginBox">
          <Box className="heading">
            <p style={{ marginTop: "-1vh" }}>Login</p>
          </Box>

          <Box className="loginFields">
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                variant="standard"
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
                  fontFamily: "Laila, serif",
                  marginTop: "4vh",
                  width: "50%",
                }}>
                Login
              </Button>
            </form>

            <Box
              sx={{
                width: "80%",
                height: "5%",
                display: "flex",
                flexDirection: "row",
                marginTop: "3vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isLoading ? (
                <>
                  <Loading />
                </>
              ) : (
                <p></p>
              )}
            </Box>
            <p
              className="resetPassword"
              // onClick={() => {
              //   dispatch(userPasswordForgot(email));
              //   // navigate("/forgotPassword");
              // }}
            >
              Forgot Password?
            </p>
          </Box>

          <Box className="otherOptions">-Or Sign In With-</Box>

          <Box className="loginOptions">
            <Box className="options">
              <FaGoogle />
            </Box>
            <Box className="options">
              <FaFacebookF />
            </Box>
            <Box className="options">
              <FaTwitter />
            </Box>
          </Box>
          <Box className="registerOption">
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
