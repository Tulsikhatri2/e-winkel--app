import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryDataUpdate } from '../../Redux/Category/categorySlice'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const EditCategory = () => {
    const [editedName, setEditedName] = useState("")
    const {edit} = useSelector(state=>state.category)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        setEditedName(edit.category.name)
    },[edit])

  return (
    <div>
        <Box className="pageData" sx={{ height: "90vh" }}>
        <Box className="dataBox" >
           <p style={{marginTop:"10vh",color:"maroon", textDecoration:"underline", fontSize:"3vh"}}>Update Category</p> 
        <Box className="categoryInfo" sx={{marginTop:"10vh"}}>
          <Box className="createButton">
          <Button variant='contained' 
          sx={{color:"white",backgroundColor:"black",
            "&:hover":{
              color:'black',
              backgroundColor:"grey"
            }
          }}
          onClick={()=>{
            navigate("/dashboard/category")
          }}>
            <IoMdArrowBack size={20}/></Button>
          </Box>
          <Box className="createCategoryFields">
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
                sx={{marginTop:"5vh"}}
                value={editedName}
                onChange={(e)=> setEditedName(e.target.value)}>
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
              onClick={()=>{
                const editedData = {
                    id: edit.category._id,
                    name: editedName,
                    status:true
                }
                dispatch(categoryDataUpdate(editedData))
                navigate("/dashboard/category")
              }}
              >UPDATE
              </Button>
              </Box>
            </Box>
        </Box>
        </Box>
        

    </div>
  )
}

export default EditCategory