import React from 'react'
import style from '../../Style/DoctorCss/DoctorAppointment.module.css'

import DAppointment from './DAppointment'
function DoctorAppointment() {
   
       return (
        <div className={style.DoctorAppointment}>
            
          <DAppointment/>
            
            {/* <Outlet/> */}
            
           
        </div>
    )
}

export default DoctorAppointment

