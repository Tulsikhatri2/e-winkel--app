import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../Redux/Authentication/authSlice";

  
const EditUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {edit} = useSelector(state=>state.auth)
    console.log(edit,"edit data")


      useEffect(()=>{
        setName(edit.user.name)
        setEmail(edit.user.email)
      },[edit.isEdit])


      const handleEdit = () => {
        const updatedData = {
          id : edit.user.id,
          name : name,
          email : email,
          password : password,
        }
        dispatch(updateUser(updatedData))
        navigate("/dashboard/users")
      }

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
          <Box className="editUserFields">

          <TextField
                variant="standard"
                label="Name*"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Roboto Mono, monospace",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="name"
                value={name}
                sx={{marginTop:"2vh"}}
                onChange={(e)=>{setName(e.target.value)}}
                >
              </TextField>
              <TextField
                variant="standard"
                label="Email*"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Roboto Mono, monospace",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="email"
                sx={{marginTop:"2vh"}}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                >
              </TextField>
              <TextField
                variant="standard"
                label="Password*"
                type="password"
                 InputLabelProps={{
                  style:{
                    fontFamily: "Roboto Mono, monospace",
                    fontWeight:"bold",
                    fontSize:"2vh"
                  }
                }}
                name="password"
                sx={{marginTop:"2vh"}}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                >
              </TextField>

              <Button variant='contained'
              color="warning"
              sx={{
                fontFamily: "Roboto Mono, monospace",
                width: "3vw",
                height: "6vh",
                fontSize: "1.8vh",
                marginTop: "2vh",
              }}
              type="submit"
              onClick={()=>{handleEdit()}}
              >UPDATE
              </Button>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;
