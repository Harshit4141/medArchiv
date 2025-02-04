import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from './Components/Doctor/DoctorDashboard'
import DoctorNotification from './Components/Doctor/DoctorNotification'
import DoctorAppointmentDetail from './Components/Doctor/DoctorAppointmentDetail'
import PatientAppointment from './Components/Patient/PatientAppointment'
import DoctorAppointment from './Components/Doctor/Doctorappointment'
import FindDoctor from './Components/Patient/FindDoctor'
import DoctorDetail from './Components/Patient/DoctorDetail'
function App() {

  return (
    <>
      <Routes>
        <Route path="/DoctorAppointment" element={<DoctorAppointment />}/>
        <Route path="DoctorAppointmentDeatils/:pid" element={<DoctorAppointmentDetail />} />
        <Route path="/FindDoctor" element={<FindDoctor/>}/>
        <Route path="/DoctorDetail" element={<DoctorDetail/>}/>
      </Routes>


    </>
  )
}

export default App
