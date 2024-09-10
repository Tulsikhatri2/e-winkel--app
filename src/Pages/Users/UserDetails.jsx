import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Loading from "../../Components/PageLoading/Loding";
// import Loading from "../../Components/Loding";



const UserDetails = () => {
    const {userDetails,isLoading} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
  return (
    <>
    <Box className="dashboard">
    <Box className="dashboardNav">
    <Box sx={{
              width: "85vw",
              height:"90vh",
            }}
          >
      <Box className="pageData">
        <Box className="dataBox" style={{justifyContent:"center"}}>
        <Box className="detailsCard">
        <Box className="createButton" sx={{height:"20%"}}>
          <Button variant='contained' 
          sx={{color:"#0a3149",
            backgroundColor:"white",
            "&:hover":{
              color:'white',
              backgroundColor:"#55a3d4"
            }
          }}
          onClick={()=>{
            navigate("/dashboard/users")
          }}
          >
            <IoMdArrowBack size={20}/></Button>
        </Box>
        {
            isLoading?
            <Box sx={{display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Loading/>
            </Box>:
            (
                <Box className="userDetails">

                      {userDetails.isEmailVerified?

                      <p style={{color:"green"}}>
                        <MdVerifiedUser size={20}/><br/>
                        verified user
                        </p> 
                        :
                      <p style={{color:"maroon"}}>
                        <ImCross size={20}/><br/>unverified user
                        </p>
                      }

                      <p style={{lineHeight:"1.7"}}>
                      ID: {userDetails.id}<br/>
                      Name: {userDetails.name}<br/>
                      Email: {userDetails.email}<br/>
                      Created At: {userDetails.createAt}
                      </p>
                  </Box>
            )
        }
         </Box>
        
        </Box>
        </Box>
      </Box>
      </Box>
      </Box>
    </>
  );
};

export default UserDetails;
