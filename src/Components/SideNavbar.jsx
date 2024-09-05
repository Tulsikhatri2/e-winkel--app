import { Box, Button } from '@mui/material';
import React from 'react'
import { userDisplay } from '../Redux/Authentication/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { displayingCategories } from '../Redux/Category/categorySlice';
import { productsDataDisplay } from '../Redux/Product/productSlice';
import { useNavigate } from 'react-router-dom';

const SideNavbar = () => {
  const {userLoginData} = useSelector(state=>state.auth)
  const navigate = useNavigate()
    const dispatch = useDispatch()
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
              <p
                style={{
                  fontSize: "2vh",
                  fontWeight: "700",
                  color: "rgb(78, 77, 77)",
                }}
              >
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
                  navigate("/");
                  localStorage.setItem("token", "");
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