import React, { useEffect } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../../Assets/logo.PNG";
import { useDispatch, useSelector } from "react-redux";
import UsersData from "./UserData";
import {
  categoryInfo,
  productsInfo,
  userDisplay,
  usersInfo,
} from "../../Redux/Authentication/authSlice";
import { displayingCategories } from "../../Redux/Category/categorySlice";
import CategoryData from "./CategoryData";
import { productsDataDisplay } from "../../Redux/Product/productSlice";
import ProductData from "./ProductData";
import Loading from "../../Components/Loding";
import CreateProducts from "./CreateProducts";
import UserDetails from "../../Components/UserDetails";
import CreateCategory from "./CreateCategory";
import CategoryDetails from "./CategoryDetails";
import EditCategory from "./EditCategory";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import SideNavbar from "../../Components/SideNavbar";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(userLoginData,"loginData")

  // useEffect(() => {
  //   // dispatch(userDisplay());
  //   if (localStorage.getItem("token")) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Box className="dashboard">
      <Box className="dashboardNav">
        <Header/>
        
        <SideNavbar/>
      </Box>
    </Box>
  );
};

export default UserDashboard;
