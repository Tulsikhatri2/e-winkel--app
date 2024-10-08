import React from 'react'
import AppRoute from './Routes/AppRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import "./Pages/Aunthentication/Authentication.style.css"
import "./Components/Layout/Layout.style.css"
import "./Pages/Categories/Category.style.css"
import "./Pages/Users/Users.style.css"
import "./Pages/Products/Product.style.css"
import "./Components/DeleteData/DeleteData.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AppRoute/>
    </div>
  )
}

export default App