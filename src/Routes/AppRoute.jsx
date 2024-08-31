import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import CategoryData from '../Components/CategoryData'
import UsersData from '../Components/UserData'
import Login from '../Pages/Aunthentication/Login'
import Register from '../Pages/Aunthentication/Register'
import EmailVerification from '../Pages/Aunthentication/EmailVerification'

const AppRoute = () => {
  return (
    <div>
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register/emailVerification" element={<EmailVerification/>}/>
        {/* //no routes */}
        <Route path="/category" element={<CategoryData/>}/> 
        <Route path="/user" element={<UsersData/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute