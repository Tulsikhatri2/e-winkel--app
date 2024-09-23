import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  citiesList,
  countryList,
  statesList,
} from "../../Redux/Country/countrySlice";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { signupUser } from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/PageLoading/Loding";
import "./Authentication.style.css"
import { IoMdArrowBack } from "react-icons/io";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  name: yup
    .string("Enter your name")
    .required("Name is required"),
  confirmPassword: yup
    .string("Enter your password")
    .required("Password confirmation is required")
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
});


const Register = () => {

  const { countries, states, cities } = useSelector((state) => state.country);
  const { isLoading, userSignupData } = useSelector((state) => state.auth);
  const [countryCode, setCountryCode] = useState("101")
  const [stateCode, setStateCode] = useState("4039")
  const [cityCode, setCityCode] = useState("")
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(citiesList(stateCode));
    dispatch(countryList());
    dispatch(statesList(countryCode));
  }, [countryCode,stateCode]);

  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const signupInfo = { name:values.name, email:values.email, password:values.password };
      dispatch(signupUser(signupInfo));
    },
  });

  console.log(countryCode, stateCode, cityCode, "country, state, city")


useEffect(()=>{
  if(userSignupData){
    navigate('/register/emailVerification')
  }
},[userSignupData])

  return (
    <>
      <Box className="background" sx={{flexDirection:"column"}}>

        <Box className="singupDetails" sx={{marginTop:"2vh"}}>
        <form onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         
        }}>
          <Box className="heading" sx={{marginTop:"-2vh"}}>
            <p>Signup</p>
          </Box>

          <Box className="signupFields">

            <TextField
              variant="standard"
              label="Name*"
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  fontSize: "2vh",
                },
              }}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            ></TextField>
            <TextField
              variant="standard"
              label="Email*"
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  fontSize: "2vh",
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
              label="Password*"
              type="password"
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  fontSize: "2vh",
                },
              }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            ></TextField>
            <TextField
              variant="standard"
              label="Confirm Password*"
              type="password"
              InputLabelProps={{
                style: {
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  fontSize: "2vh",
                },
              }}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            ></TextField>
            <Box className="selectOptions">
              <select className="countryOptions" name="countryCode"
              onChange={(e)=>{setCountryCode(e.target.value)}}>
                <option>Select Country</option>
                {countries.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <select className="countryOptions" name="stateCode"
              onChange={(e)=>{setStateCode(e.target.value)}}>
                <option>Select State</option>
                {states.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <select className="countryOptions" name="cityCode"
              onChange={(e)=>{setCityCode(e.target.value)}}>
                <option>Select City</option>
                {cities.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </Box>
          </Box>

          <Box className="signupButton">
            <Button
              variant="contained"
              sx={{
                fontFamily: "Roboto Mono, monospace",
                marginTop: "4vh",
                width: "50%",
                backgroundColor: "#442284",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#442284",
                  fontWeight: "700",
                },
              }}
              type="submit"
            >
              Register
            </Button>
            {isLoading ? (
              <>
                <Loading />
              </>
            ) : (
              <p></p>
            )}
            
          </Box>
         </form>

         <p style={{fontSize:"2vh"}}>Already a user?
         <span
              className="registration"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </span>
         </p>
        </Box>
      </Box>
    </>
  );
};

export default Register;
