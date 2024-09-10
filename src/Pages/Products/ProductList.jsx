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
import Header from "../../Components/Dashboard/Header";
import SideNavbar from "../../Components/Dashboard/SideNavbar";
import Loading from "../../Components/PageLoading/Loding";



const ProductList = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoadingProduct} = useSelector(state=>state.product)
  return (
    <>
      {isLoadingProduct?(
        <div style={{marginLeft:"-30vw",marginTop:"50vh"}}>
        <Loading/>
        </div>
      ):
      <Box className="dashboard">
      <Box className="dashboardNav">
        <Box className="productsBox">
      <Box className="pageData" sx={{ height: "90vh" }}>
        <Box className="dataBox">
          <p
           className="productHeader"
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
                  fontSize: "3vh",
                  marginTop: "-2vh",
                  fontWeight:"bold"
                }}
                color="warning"
                onClick={()=>{
                  navigate("/dashboard/products/create-product")
                }}
              >
                +
              </Button>
            </span>

          </p>
          <Box className="productsCardBox">

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

export default ProductList;
