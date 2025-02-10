import React from 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import { Link } from 'react-router-dom'
function DoctorCardAppoint({Appointment}) {
  return (
    <>
       <div className={style.card}>
                <div>
                    <img src={male} className={style.img} alt="female" title="women" />
                </div>
                <div className={style.namesection}>
                    <h3>Dr.{Appointment.id}</h3>
                    <p className={style.message}>{Appointment.id}</p>
                </div>
                <div className={style.buttonSection}>
                      <Link to="/DoctorDetail"><div className={style.Btn}>
                     <button className={style.Appointbtn} style={{backgroundColor:Appointment.id=="completed"?"green":Appointment.id=="Appoint"?"blue":"red"}}>{Appointment.id}</button>
                    </div></Link> 
                </div>
            </div>
    </>
  )
}

export default DoctorCardAppoint
