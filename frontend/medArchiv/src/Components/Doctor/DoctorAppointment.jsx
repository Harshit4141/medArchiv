import React, { useState } from 'react'
import style from '../../Style/DoctorCss/DoctorAppointment.module.css'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import {Link, Outlet} from "react-router-dom"
function DoctorAppointment() {
    let [PatientDetail,setPatientDetail]=useState({pid:1,name:"Harshit Mishra",Gender:"male",message:"I am writing to express concern about persistent pain and discomfort in my hand."})
    return (
        <div className={style.DoctorAppointment}>
            
            <div className={style.card}>
                <div>
                    <img src={PatientDetail.Gender=='male'?male:female} className={style.img} alt={PatientDetail.Gender} title={PatientDetail.name} />
                </div>
                <div className={style.namesection}>
                    <h3>{PatientDetail.name}</h3>
                    <p className={style.message}>{PatientDetail.message}</p>
                </div>
                <div className={style.buttonSection}>
                    <div className={style.selectsection}>
                        <select name="" id="" className={style.selectTime}>
                            <option value="">2:30 AM</option>
                            <option value="">1:30 AM</option>
                        </select>
                    <Link to={`/DoctorAppointmentDeatils/${PatientDetail.pid}`}><button className={style.view}>View</button></Link>
                    
                    </div>

                    <div className={style.Btn}>
                        <button className={style.Appointbtn}>Appoint</button>
                    </div>
                </div>
            </div>
            
            {/* <Outlet/> */}
            
           
        </div>
    )
}

export default DoctorAppointment
