import React from 'react'
import AppRoute from './Routes/AppRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AppRoute/>
    </div>
  )
}

export default App