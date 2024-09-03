import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Loading from "./Loding";
import { usersInfo } from "../Redux/Authentication/authSlice";
// import Loading from "../../Components/Loding";



const UserDetails = () => {
    const {singleUserData,isloading} = useSelector(state=>state.auth)
    console.log(singleUserData,"userData")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
  return (
    <>
      <Box className="userData">
        <Box className="dataBox" style={{justifyContent:"center"}}>
        <Box className="detailsCard">
        <Box className="categoryCreateButton" sx={{height:"20%"}}>
          <Button variant='contained' 
          sx={{color:"#0a3149",backgroundColor:"white",
            "&:hover":{
              color:'white',
              backgroundColor:"#55a3d4"
            }
          }}
          onClick={()=>{
            dispatch(usersInfo(true))
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        </Box>
        {
            isloading?
            <Box sx={{display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Loading/>
            </Box>:
            (
                <Box sx={{
                    textAlign:"center",
                    display:"flex",
                    flexDirection:"column",
                    width:"100%",
                    height:"70%",
                    color:"black",
                    fontSize:"2vh",
                    fontWeight:"500",  
                  }}>
                      {singleUserData.isEmailVerified?
                      <p style={{color:"green"}}><MdVerifiedUser size={20}/><br/>verified user</p> :<p style={{color:"maroon"}}><ImCross size={20}/><br/>unverified user</p>}
                      <p style={{lineHeight:"1.7"}}>ID: {singleUserData.id}<br/>
                      Name: {singleUserData.name}<br/>
                      Email: {singleUserData.email}<br/>
                      Created At: {singleUserData.createAt}</p>
                  </Box>
            )
        }
        
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDetails;
