import React, { useEffect } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../../Assets/logo.PNG";
import { useDispatch, useSelector } from "react-redux";
import UsersData from "../../Components/UserData";
import { categoryInfo, productsInfo, userDisplay, usersInfo } from "../../Redux/Authentication/authSlice";
import { displayingCategories } from "../../Redux/Category/categorySlice";
import CategoryData from "../../Components/CategoryData";
import { productsDataDisplay } from "../../Redux/Product/productSlice";
import ProductData from "../../Components/ProductData";
import Loading from "../../Components/Loding";
import CreateProducts from "../../Components/CreateProducts";
import UserDetails from "../../Components/UserDetails";
import CreateCategory from "../../Components/CreateCategory";
import CategoryDetails from "../../Components/CategoryDetails";
import EditCategory from "../../Components/EditCategory";
import { Navigate, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { allUsersData,userLoginData,editCategory,isProduct,isCategory, isLoading,creatingProduct,userDetails, categoryCreation,categoryDetails } = useSelector((state) => state.auth);
  const {isLoadingData} = useSelector(state => state.category)
  const {isLoadingProduct} = useSelector(state=>state.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(userLoginData,"loginData")

  useEffect(()=>{
    dispatch(userDisplay())
    if(localStorage.getItem("token")){
      navigate("/dashboard")
    }
    else{
    navigate("/")
    }
  },[])

  return (
    <Box className="dashboard">
      <Box className="dashboardNav">
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ backgroundColor: "white" }} className="nav">
            <img
              src={logo}
              width="7%"
              height="80%"
              style={{ marginLeft: "5vw" }}
            />
          </Toolbar>
        </AppBar>

        <Box className="dashboardDetails">
          <Box className="sideDrawer">
            <p
              onClick={() => {
                dispatch(userDisplay());
                dispatch(usersInfo())
              }}
            >
              Users
            </p>

            <p
              onClick={() => {
                  dispatch(displayingCategories())
                  dispatch(categoryInfo(true))
              }}
            >
              Categories
            </p>

            <p
              onClick={() => {
                dispatch(productsDataDisplay())
                  dispatch(productsInfo(true))
              }}
            >
              Products
            </p>
            <Box sx={{marginTop:"30vh"}}>
              <p style={{fontSize:"2vh", fontWeight:"700",color:"rgb(78, 77, 77)"}}>{userLoginData.name}<br/>
              {userLoginData.email}</p>
              
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontFamily: "Laila, serif",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#C4C4C4",
                  color: "red",
                  fontWeight: "bold",
                },
              }}
              onClick={()=>{
                navigate("/")
                localStorage.setItem("token","")
              }}
            >
              Logout
            </Button>
            </Box>
          </Box>
          <Box sx={{width:"100vw",display:"flex", alignItems:"center", justifyContent:"center"}}>
            
            {isLoading || isLoadingData || isLoadingProduct?(
              <><Loading/></>
            ):
            ((isProduct?(<>
            <ProductData/>
            </>):
            (isCategory?(
              <>
              <CategoryData/>
              </>
            ):
            (creatingProduct?(<>
            <CreateProducts/>
            </>):
            (userDetails?(<>
            <UserDetails/>
            </>):
            (categoryCreation?
              (<CreateCategory/>):
              (categoryDetails?(<>
              <CategoryDetails/>
              </>):
              (editCategory?(<>
              <EditCategory/></>):(<>
              <UsersData users={allUsersData}/></>)))))))))}
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
