import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { buttonActiveStyle, logoutUser, userListData } from '../../Redux/Authentication/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categoryListData } from '../../Redux/Category/categorySlice';
import { productsListData } from '../../Redux/Product/productSlice';
import { useNavigate } from 'react-router-dom';

const SideNavbar = () => {
  const {userLoginData,userToken, activeButton} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUserList = () => {
    dispatch(userListData());
    dispatch(buttonActiveStyle("Users"))
    navigate("/dashboard/users")
  }

  const handleCategoryList = () => {
    dispatch(categoryListData());
    dispatch(buttonActiveStyle("Categories"))
    navigate("/dashboard/category")
  }

  const handleProductsList = () => {
    dispatch(productsListData());
    dispatch(buttonActiveStyle("Products"))
    navigate("/dashboard/products")
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.clear()
    navigate("/");
  }


    useEffect(()=>{
    if(userToken){
      navigate("/dashboard/users")
    }
    else if (!userToken){
      window.location.reload()
      navigate("/")
    }
  },[userToken])

  return (
    <Box className="dashboardDetails">
          <Box className="sideDrawer">
            <button className={`${activeButton=="Users" ? "sideDrawerButton active" : "sideDrawerButton"}`} onClick={handleUserList}>
              Users
            </button>

            <button  className={`${activeButton=="Categories" ? "sideDrawerButton active" : "sideDrawerButton"}`} onClick={handleCategoryList}>
              Categories
            </button>

            <button className={`${activeButton=="Products" ? "sideDrawerButton active" : "sideDrawerButton"}`} onClick={handleProductsList}>
              Products
            </button>

            <Box sx={{ marginTop: "30vh" }}>
              <p className="userDetails">
                {userLoginData?.name}
                <br />
                {userLoginData?.email}
              </p>

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
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Box>
          
          </Box>
  )
}

export default SideNavbar