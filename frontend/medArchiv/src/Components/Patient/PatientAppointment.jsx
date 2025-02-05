import React from 'react'
import PAppointment from './PAppointment'
import 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import DoctorCardAppoint from './DoctorCardAppoint'
function PatientAppointment() {

  return (
   <div className={style.findDoctor}>
       <DoctorCardAppoint status="Appoint"/>
       <DoctorCardAppoint status="Pending"/>
      </div>
  )
}

export default PatientAppointment
