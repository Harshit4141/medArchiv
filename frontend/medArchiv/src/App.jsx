import { useState } from 'react'
import './App.css'
// import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from './Components/Doctor/DoctorDashboard'
// import {DoctorNotification} from './Components/Doctor/DoctorNotification'
import DoctorAppointmentDetail from './Components/Doctor/DoctorAppointmentDetail'
function App() {

  let changeCount=()=>{
    setCount(count+1);
  }
  return (
    <>
     <Routes>
      <Route path="/" element={<DoctorDashboard/>}/>
     </Routes>
    

    </>
  )
}

export default App
