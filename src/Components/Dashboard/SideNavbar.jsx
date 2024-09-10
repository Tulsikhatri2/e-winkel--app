import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { logoutUser, userListData } from '../../Redux/Authentication/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categoryListData } from '../../Redux/Category/categorySlice';
import { productsListData } from '../../Redux/Product/productSlice';
import { useNavigate } from 'react-router-dom';

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
                dispatch(userListData());
                navigate("/dashboard/users")
              }}
            >
              Users
            </p>

            <p
              onClick={() => {
                dispatch(categoryListData());
                navigate("/dashboard/category")
              }}
            >
              Categories
            </p>

            <p
              onClick={() => {
                dispatch(productsListData());
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