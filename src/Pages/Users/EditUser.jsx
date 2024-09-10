import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
  });

  
const EditUser = () => {

    const navigate = useNavigate()
    const {edit} = useSelector(state=>state.auth)
    console.log(edit,"edit data")

    const formik = useFormik({
        initialValues: {
          name:"",
          email: "",
          password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
          console.log(values,"edit user values")
        },
      });


  return (
    <Box className="pageData" sx={{ height: "90vh" }}>
      <Box className="dataBox" sx={{ justifyContent: "center" }}>
      <Box className="usersInfo">
      <Box className="createButton" sx={{marginTop:"-2vh"}}>
          <Button variant='contained' 
          sx={{color:"white",
            backgroundColor:"black",
            "&:hover":{
              color:'black',
              backgroundColor:"grey"
            }
          }}
          onClick={()=>{
            navigate("/dashboard/users")
          }}>
            <IoMdArrowBack size={20}/></Button>
          </Box>
          <form onSubmit={formik.handleSubmit}>
          <Box className="editUserFields">

          <TextField
                variant="standard"
                label="Name*"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Laila, serif",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="name"
                value={formik.values.name}
                sx={{marginTop:"2vh"}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                >
              </TextField>
              <TextField
                variant="standard"
                label="Email*"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Laila, serif",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="email"
                sx={{marginTop:"2vh"}}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                >
              </TextField>
              <TextField
                variant="standard"
                label="Password*"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Laila, serif",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="password"
                sx={{marginTop:"2vh"}}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                >
              </TextField>

              <Button variant='contained'
              color="warning"
              sx={{
                fontFamily: "Laila, serif",
                width: "3vw",
                height: "6vh",
                fontSize: "1.8vh",
                marginTop: "2vh",
              }}
              type="submit"
              >UPDATE
              </Button>

          </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;
