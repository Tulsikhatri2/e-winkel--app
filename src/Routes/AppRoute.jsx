import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../Pages/Aunthentication/Login";
import Register from "../Pages/Aunthentication/Register";
import EmailVerification from "../Pages/Aunthentication/EmailVerification";
import PrivateRoutes from "./PrivateRoutes";
import Header from "../Components/Dashboard/Header";
import SideNavbar from "../Components/Dashboard/SideNavbar";
import UsersList from "../Pages/Users/UsersList";
import CategoryList from "../Pages/Categories/CategoryList";
import ProductList from "../Pages/Products/ProductList";
import UserDetails from "../Pages/Users/UserDetails";
import CategoryDetails from "../Pages/Categories/CategoryDetails";
import CreateCategory from "../Pages/Categories/CreateCategory";
import EditCategory from "../Pages/Categories/EditCategory";
import CreateProducts from "../Pages/Products/CreateProducts";
import ResetPassword from "../Pages/Aunthentication/ResetPassword";

const AppRoute = () => {

  return (
    <>
    {!localStorage.getItem("token")?
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/emailVerification" element={<EmailVerification />}/>
      <Route path="/auth/reset-password/:id/:token" element={<ResetPassword/>}/>
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
          <Route path="/dashboard/users" element={<PrivateRoutes Component={UsersList}/>}/>
          <Route path="/dashboard/products" element={<PrivateRoutes Component={ProductList}/>} />
          <Route path="/dashboard/category" element={<PrivateRoutes Component={CategoryList}/>} />
          <Route path="/dashboard/users/user-details" element={<PrivateRoutes Component={UserDetails}/>}/>
          <Route path="/dashboard/category/category-details" element={<PrivateRoutes Component={CategoryDetails}/>}/>
          <Route path="/dashboard/category/create-category" element={<PrivateRoutes Component={CreateCategory}/>}/>
          <Route path="/dashboard/category/edit-category" element={<PrivateRoutes Component={EditCategory}/>}/>
          <Route path="/dashboard/products/create-product" element={<PrivateRoutes Component={CreateProducts}/>}/>
          
        </Routes>
      </div>
    </div>

   }  
  </>
  );
};

export default AppRoute;
