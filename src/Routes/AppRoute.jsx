import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../Pages/Aunthentication/Login";
import Register from "../Pages/Aunthentication/Register";
import EmailVerification from "../Pages/Aunthentication/EmailVerification";
import PrivateRoutes from "./PrivateRoutes";
import Header from "../Components/Header";
import SideNavbar from "../Components/SideNavbar";
import UsersData from "../Pages/Dashboard/UserData";
import CategoryData from "../Pages/Dashboard/CategoryData";
import ProductData from "../Pages/Dashboard/ProductData";
import UserDetails from "../Pages/Dashboard/UserDetails";
import CategoryDetails from "../Pages/Dashboard/CategoryDetails";
import CreateCategory from "../Pages/Dashboard/CreateCategory";
import EditCategory from "../Pages/Dashboard/EditCategory";
import CreateProducts from "../Pages/Dashboard/CreateProducts";

const AppRoute = () => {

  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(localStorage.getItem("token")){
  //     navigate("/dashboard/users")
  //   }
  //   else{
  //   navigate("/")
  //   }
  // },[])
  
  return (
    <>
    {!localStorage.getItem("token")?
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/emailVerification" element={<EmailVerification />}/>
    </Routes>
  </div>
   : 
  <div>
      <div>
        <Header/>
      </div>
      <div style={{display:"flex"}}>
        <SideNavbar/>
        <Routes>
          <Route path="/dashboard/users" 
          element={<UsersData/>}
          // element={<PrivateRoutes Component={UsersData}/>}
           />
          <Route path="/dashboard/products" element={<PrivateRoutes Component={ProductData}/>} />
          <Route path="/dashboard/category" element={<PrivateRoutes Component={CategoryData}/>} />
          <Route path="/dashboard/users/userDetails" element={<PrivateRoutes Component={UserDetails}/>}/>
          <Route path="/dashboard/category/categoryDetails" element={<PrivateRoutes Component={CategoryDetails}/>}/>
          <Route path="/dashboard/category/createCategory" element={<PrivateRoutes Component={CreateCategory}/>}/>
          <Route path="/dashboard/category/editCategory" element={<PrivateRoutes Component={EditCategory}/>}/>
          <Route path="/dashboard/products/addProduct" element={<PrivateRoutes Component={CreateProducts}/>}/>
        </Routes>
      </div>
    </div>

   }  
  </>
  );
};

export default AppRoute;
