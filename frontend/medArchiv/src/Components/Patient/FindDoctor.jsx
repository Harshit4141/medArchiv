import React from 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import { Link } from 'react-router-dom'
function FindDoctor() {
  return (
    <div className={style.findDoctor}>
            
            <div className={style.card}>
                <div>
                    <img src={male} className={style.img} alt="female" title="women" />
                </div>
                <div className={style.namesection}>
                    <h3>Dr.Harshit Misrha</h3>
                    <p className={style.message}>Dentist</p>
                </div>
                <div className={style.buttonSection}>
                      <Link to="/DoctorDetail"><div className={style.Btn}>
                     <button className={style.Appointbtn}>View</button>
                    </div></Link> 
                </div>
            </div>
            
            </div>
  )
}

export default FindDoctor
