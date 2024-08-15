import { useEffect } from "react";
import { useAddress, useMetamask, useContract } from "@thirdweb-dev/react";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from "./Components/home";
import LoginSignUp from './Components/LoginSignUp';
import DoctorDashboard from './Components/DoctorDashboard'; // Import the DoctorDashboard component
import PatientDashboard from './Components/PatientDashboard';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";




function App() {
  const { contract, isLoading } = useContract(import.meta.env.VITE_CONTRACT_ADDRESS_MEDICALRECORD);
  const address = useAddress()
  const connectWithMetamask = useMetamask();

  useEffect(() => {
    connectWithMetamask().then(async (res) => {
      
    });
  }, [isLoading, address])

  console.log(contract)

  return (
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      secretKey={import.meta.env.VITE_SECRET_KEY}
      activeChain={Sepolia}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login-signup' element={<LoginSignUp />} />
        <Route path='/doctor-dashboard' element={<DoctorDashboard contract= {contract} isLoading={isLoading}/>} />
        <Route path='/patient-dashboard' element={<PatientDashboard contract= {contract} isLoading={isLoading} />} /> 
      </Routes>
    </BrowserRouter>
    </ThirdwebProvider>
  )
}

export default App