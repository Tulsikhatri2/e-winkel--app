import React from 'react'
import AppRoute from './Routes/AppRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import "./Pages/Aunthentication/Authentication.style.css"
import "./Components/Dashboard/Dashboard.style.css"
import "./Pages/Categories/Category.style.css"
import "./Pages/Users/Users.style.css"
import "./Pages/Products/Product.style.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AppRoute/>
    </div>
  )
}

export default App