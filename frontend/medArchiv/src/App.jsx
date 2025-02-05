import { useState } from 'react'
import './App.css'
// import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from './Components/Doctor/DoctorDashboard'
import DoctorAppointment from './Components/Doctor/DoctorAppointment'
import DoctorAppointmentDeatils from './Components/Doctor/DoctorAppointmentDetail'
import { Route,Routes } from 'react-router-dom'
import {Layout } from 'antd'; 
import DoctorLogo from './Components/Doctor/Logo'
import PatientLogo from './Components/Patient/Logo'
import DoctorMenuList from './Components/Doctor/MenuList'
import PatientMenuList from './Components/Patient/MenuList'
import ToggleThemeButton from './Components/ToggleThemeButton'
import DoctorNotification from './Components/Doctor/DoctorNotification'
import DoctorHistory from './Components/Doctor/DoctorHistory'
import FindDoctor from './Components/Patient/FindDoctor'
import PatientAppointment from './Components/Patient/PatientAppointment'
import PatientNotification from './Components/Patient/PatientNotification' 
import PatientRecord from './Components/Patient/PatientRecord'
import DoctorDetail from './Components/Patient/DoctorDetail'
import DStatus from './Components/Doctor/DStatus'
function App() {
  const{Header, Sider } = Layout;
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme= () => {
    setDarkTheme(!darkTheme);
  }
  // 1->Patient
  // 0-> Doctor
  let [check,setCheck]=useState(1)
  
  // Pending
  // Approved
  let [DoctorStatus,setDoctorStatus]=useState("Approved")
  return (
    <>
    {check===0?
    
    DoctorStatus==="Approved"?
    <Layout>
    <Sider theme ={darkTheme ? 'dark' : 'light'}  className= "sidebar">
      <DoctorLogo/>
      <DoctorMenuList darkTheme = {darkTheme}/>
      <ToggleThemeButton darkTheme={darkTheme}
      toggleTheme={toggleTheme}/>
      </Sider>
      <Routes>
    
    <Route path="/DStatus" element={<DoctorDashboard/>}/>
    <Route path="/DoctorAppointment" element={<DoctorAppointment />}/>
    <Route path="/DoctorAppointmentDeatils/:pid" element={<DoctorAppointmentDeatils/>}/>
    <Route path="/DoctorNotification" element={<DoctorNotification />}/>
    <Route path="/DoctorHistory" element={<DoctorHistory />}/>
  
    
   </Routes>
    </Layout>

    :
    <Routes>
    <Route path="/Dashboard" element={<DStatus />}/>
    </Routes> 
    :
     <Layout>
     <Sider theme ={darkTheme ? 'dark' : 'light'}  className= "sidebar">
       <PatientLogo/>
       <PatientMenuList darkTheme = {darkTheme}/>
       <ToggleThemeButton darkTheme={darkTheme}
       toggleTheme={toggleTheme}/>
       </Sider>
       <Routes>
     <Route path="/Dashboard" element={<DoctorDashboard/>}/>
     <Route path="/FindDoctor" element={<FindDoctor/>}/>
     <Route path="/PatientAppointment" element={<PatientAppointment />}/>
     <Route path="/PatientNotification" element={<PatientNotification />}/>
     <Route path="/PatientRecord" element={<PatientRecord />}/>
     <Route path="/DoctorDetail/:id" element={<DoctorDetail />}/>
     <Route path="/DoctorDetail" element={<DoctorDetail />}/>
     
    </Routes>
     </Layout>
  }

    </>
  )
}

export default App
