import {
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { CgPlayListAdd } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import SideNavbar from "../../Components/SideNavbar";
import Loading from "../../Components/Loding";



const ProductData = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {allProductsData,isLoadingProduct} = useSelector(state=>state.product)
  return (
    <>
      {isLoadingProduct?(
        <div style={{marginLeft:"-30vw",marginTop:"50vh"}}>
        <Loading/>
        </div>
      ):
      <Box className="dashboard">
      <Box className="dashboardNav">
        <Box
            sx={{
              width: "95vw",
              height:"90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop:"5vh",
            }}
          >
      <Box className="userData" sx={{ height: "90vh" }}>
        <Box className="dataBox">
          <p
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "7vh",
            }}
          >
            <span style={{ width: "70vw", textAlign: "center" }}>
              ALL PRODUCTS
            </span>
            <span style={{ width: "10vw" }}>
              <Button
                variant="contained"
                className="loginButton"
                sx={{
                  fontFamily: "Laila, serif",
                  width: "3vw",
                  height: "6vh",
                  fontSize: "2.7vh",
                  marginTop: "-2vh",
                }}
                color="warning"
                onClick={()=>{
                  navigate("/dashboard/products/addProduct")
                }}
              >
                <CgPlayListAdd size={30} />
              </Button>
            </span>
          </p>
          <Box sx={{ width:"80vw", height:"85%",display:"flex",flexWrap:"wrap",flexDirection:"row",
          justifyContent:"space-between"
          }}>

            <Box sx={{width:"23%"}}>
            <Card variant="outlined" sx={{"&:hover":{boxShadow:"0px 0px 1vh gray"}}}>
              <CardContent sx={{display:"flex",flexDirection:"row"}}>
                  <p>Shoes</p>
                  <img style={{backgroundColor:"pink"}}></img>
              </CardContent>
            </Card>
            </Box>

            
  
          </Box> 
        </Box>
       </Box>
       </Box>
       </Box>
       </Box>
}
</>
  );
};

export default ProductData;
