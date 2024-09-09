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
        <Box className="userData" sx={{ height: "90vh" }}>
        <Box className="dataBox" sx={{justifyContent:"center"}}>
            
        <Box className="categoryInfo">
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
                sx={{marginTop:"2vh"}}
                value={editedName}
                onChange={(e)=> setEditedName(e.target.value)}>
              </TextField>

              <Button variant='contained'
              color="warning"
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