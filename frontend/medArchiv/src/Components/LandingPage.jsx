import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div> 
    <Link to="/DoctorRegistration"><button>Doctor Registration</button></Link>
    <Link to="/PatientRegistration"><button>Patient Registration</button></Link>
    <Link to="/Login"><button>Login</button></Link>
    </div>
  )
}

export default LandingPage
