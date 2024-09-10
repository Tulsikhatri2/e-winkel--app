import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { creatingCategory } from '../../Redux/Category/categorySlice';


const CreateCategory = () => {
    const [name,setName] = useState()
    const [categoryStatus, setCategoryStatus] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categoryData = {
        name: name,
        status: categoryStatus,
    }

  return (
    <>
    <Box className="dashboard">
    <Box className="dashboardNav">
    <Box
            sx={{
              width: "85vw",
              height:"90vh",
            }}
          >
    <Box className="pageData">
      <Box className="dataBox" sx={{justifyContent:"center"}}>
      <Box className="categoryInfo">
        <Box className="createButton">
          <Button variant='contained' 
          sx={{color:"white",
            backgroundColor:"black",
            "&:hover":{
              color:'black',
              backgroundColor:"grey"
            }
          }}
          onClick={()=>{
            navigate("/dashboard/category")
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        </Box>
        <Box classname="createCategoryFields">
        <TextField variant="standard"
              label="Name*"
               InputLabelProps={{
                style:{
                  fontFamily: "Laila, serif",
                  fontWeight:"bold",
                  fontSize:"2vh"
                }
              }}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              sx={{marginTop:"2vh"}}>

              </TextField>
              <Button variant='contained'
              sx={{color:"white",
                backgroundColor:"black",
                fontFamily: "Laila, serif",
                "&:hover":{
                  color:'black',
                  backgroundColor:"grey",
                }
              }}
              onClick={()=>{
                dispatch(creatingCategory(categoryData))
                
              }}
              >Create</Button>
        </Box>
        </Box>
        </Box>
        </Box>
      </Box>
      </Box>
    </Box>
    </>
    
  )
}

export default CreateCategory