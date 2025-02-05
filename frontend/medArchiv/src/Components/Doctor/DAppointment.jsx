import React from 'react'
import style from '../../Style/DoctorCss/DAppointment.module.css'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import {Link, Outlet} from "react-router-dom"
import { useState } from 'react'

function DAppointment() {
     const [PatientDetail, setPatientDetail] = useState([
            { 
              pid: 1, 
              name: "Harshit Mishra", 
              Gender: "male", 
              message: "I am writing to express concern about persistent pain and discomfort in my hand."
            },
        { 
          pid: 2, 
          name: "Anita Sharma", 
          Gender: "female", 
          message: "I have been experiencing severe headaches and neck pain for a few weeks now."
        },
        { 
          pid: 3, 
          name: "Raj Kumar", 
          Gender: "male", 
          message: "I feel constant fatigue and dizziness which is affecting my daily routine."
        },
        { 
          pid: 4, 
          name: "Priya Verma", 
          Gender: "female", 
          message: "I am worried about the sharp pain in my knees, especially when climbing stairs."
        }
          ]);
  return (
    <>
    {PatientDetail.map((PatientD,index)=>{
return(
    <div className={style.card} key={index}>
    <div>
        <img src={PatientD.Gender=='male'?male:female} className={style.img} alt={PatientDetail.Gender} title={PatientD.name} />
    </div>
    <div className={style.namesection}>
        <h3>{PatientD.name}</h3>
        <p className={style.message}>{PatientD.message}</p>
    </div>
    <div className={style.buttonSection}>
        <div className={style.selectsection}>
            <select name="" id="" className={style.selectTime}>
                <option value="">2:30 AM</option>
                <option value="">1:30 AM</option>
            </select>
        <Link to={`/DoctorAppointmentDeatils/${PatientD.pid}`}><button className={style.view}>View</button></Link>
        
        </div>

        <div className={style.Btn}>
            <button className={style.Appointbtn}>Appoint</button>
        </div>
    </div>
</div>

);
    })}
    
</>
  )
}

export default DAppointment
