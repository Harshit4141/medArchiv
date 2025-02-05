import React, { useState } from 'react'
import DoctorCard from './DoctorCard'
import style from '../../Style/PatientCss/FindDoctor.module.css'
function FindDoctor() {
  let [Doctor,setDoctor]=useState(
    [
      {
        "id": 1,
        "name": "Dr. Mithun Bhartia",
        "specialization": "Sexologist",
        "gender": "Male"
      },
      {
        "id": 2,
        "name": "Dr. Priya Soni",
        "specialization": "Cardiologist",
        "gender": "Female"
      },
      {
        "id": 3,
        "name": "Dr. Arvind Kapoor",
        "specialization": "Orthopedic Surgeon",
        "gender": "Male"
      },
      {
        "id": 4,
        "name": "Dr. Neha Agarwal",
        "specialization": "Dermatologist",
        "gender": "Female"
      },
      {
        "id": 5,
        "name": "Dr. Rajeev Verma",
        "specialization": "Pediatrician",
        "gender": "Male"
      }
    ]
    
    
    
  )
  return (
  <div className={style.findDoctor}>
    {Doctor.map((Doct)=>{
      return(
        <DoctorCard Doctor={Doct}/>
      );
    })}
   
  
   </div>
  )
}

export default FindDoctor
