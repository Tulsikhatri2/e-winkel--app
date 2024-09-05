import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const fileTypes = ["JPG", "PNG", "GIF"]
const CreateProducts = () => {
  const dispatch = useDispatch()
  const {allCategoryData} = useSelector(state=>state.category)
  const navigate = useNavigate()

  const [file, setFile] = useState(null);

  const fileHandleChange = (file) => {
    setFile(file);
  };

  const validationSchema = yup.object({
    name: yup
      .string("Enter your name")
      .required("Name is required"),
    description: yup
      .string("Enter your description")
      .required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name:"",
      status: false,
      description: "",
      categoryId:"",
      image:file
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, "product add")
    },
  });

  // useEffect(()=>{
  //   dispatch(displayingCategories())
  // },[dispatch])
  
  return (
    <>
    <Box className="dashboard">
      <Box className="dashboardNav">
        {/* <Header/>
        <SideNavbar/> */}
        <Box
            sx={{
              width: "85vw",
              height:"90vh",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // marginTop:"5vh",
            }}
          >
    <Box className="userData">
      <Box className="dataBox" sx={{justifyContent:"center"}}>
      <Button variant='contained' 
          sx={{color:"white",backgroundColor:"black",
            "&:hover":{
              color:'black',
              backgroundColor:"grey"
            }
          }}
          onClick={()=>{
            navigate("/dashboard/products")
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        <p style={{textDecoration:"underline", color:"maroon", fontSize:"3vh"}}>ADD PRODUCTS</p>
        <form onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         
        }}>
          <TextField
              variant="standard"
              label="Name*"
              InputLabelProps={{
                style: {
                  fontFamily: "Laila, serif",
                  fontWeight: "600",
                  fontSize: "2vh",
                  color:"black"
                },
              }}
              InputProps={{
                style: {
                  borderBottom: "1px solid maroon",
                },
              }}
              sx={{marginTop:"3vh"}}
              color='black'  
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            ></TextField>
            <TextField
              variant="standard"
              label="Description*"
              InputLabelProps={{
                style: {
                  fontFamily: "Laila, serif",
                  fontWeight: "600",
                  fontSize: "2vh",
                  color:"black"
                },
              }}
              InputProps={{
                style: {
                  borderBottom: "1px solid maroon",
                },
              }}
              sx={{marginTop:"3vh"}}
              color='black'  
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
            ></TextField>
            <select className='countryOptions' style={{width:"10vw", marginTop:"3vh"}}>
              <option>Select Category*</option>
              {
                allCategoryData.map((item)=>{
                  return(
                    <option>
                      {item.name}
                    </option>
                  )
                })
              }
            </select>
           
              <FileUploader name="file" tyes = {fileTypes} onChange={fileHandleChange} classes="filesUploader"/>
            
        </form>
        </Box>
        </Box>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default CreateProducts