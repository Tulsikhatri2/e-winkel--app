import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { logoutUser, userDisplay } from '../../Redux/Authentication/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { displayingCategories } from '../../Redux/Category/categorySlice';
import { productsDataDisplay } from '../../Redux/Product/productSlice';
import { useNavigate } from 'react-router-dom';
// import "./SideNavbar.style.css"

const SideNavbar = () => {
  const {userLoginData,userToken} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()


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
            <p
              onClick={() => {
                dispatch(userDisplay());
                navigate("/dashboard/users")
              }}
            >
              Users
            </p>

            <p
              onClick={() => {
                dispatch(displayingCategories());
                navigate("/dashboard/category")
              }}
            >
              Categories
            </p>

            <p
              onClick={() => {
                dispatch(productsDataDisplay());
                navigate("/dashboard/products")
              }}
            >
              Products
            </p>
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
                onClick={() => {
                  dispatch(logoutUser());
                  localStorage.clear()
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
          
          </Box>
  )
}

export default SideNavbar