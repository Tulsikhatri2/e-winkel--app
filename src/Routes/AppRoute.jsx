import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'

import Login from '../Pages/Aunthentication/Login'
import Register from '../Pages/Aunthentication/Register'
import EmailVerification from '../Pages/Aunthentication/EmailVerification'
import PrivateRoutes from './PrivateRoutes'



const AppRoute = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register/emailVerification" element={<EmailVerification/>}/>
        <Route path="/dashboard" element={<PrivateRoutes Component={Dashboard}/>}/>
        {/* <Route path="/PrivateRoutes" element={<PrivateRoutes/>}/> */}

        {/* //no routes */}
        {/* <Route path="/category" element={<CategoryData/>}/>  */}
        {/* <Route path="/user" element={<UsersData/>}/> */}
        {/* <Route path="/userDetails" element={<UserDetails/>}/> */}
        {/* <Route path="/categoryDetails" element={<CategoryDetails/>}/> */}
        {/* <Route path="/category/createProduct/:id" element={<CreateProducts/>}/> */}
        {/* <Route path="/category/createCategory" element={<CreateCategory/>}/> */}

        </Routes>
    </div>
  )
}

export default AppRoute