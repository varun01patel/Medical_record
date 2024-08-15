import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'slick-carousel/slick/slick.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/home';
import DoctorDashboard from './Components/DoctorDashboard';
import PatientDashboard from './Components/PatientDashboard';
import LoginSignUp from './Components/LoginSignUp';  // Ensure correct import path

import { Routes, Route, HashRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      secretKey={import.meta.env.VITE_SECRET_KEY}
      activeChain={Sepolia}>
      {/* <App /> */}
      <HashRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
        <Route path='/' element={<Home />} />
      
       
        <Route path='/login-signup' element={<LoginSignUp />} />
        <Route path='/patient-dashboard' element={<PatientDashboard />} /> 
        
      </Routes>
    </HashRouter>
    </ThirdwebProvider>
  </React.StrictMode>,
)
