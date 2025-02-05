import React, { useState } from 'react'
import style from '../../Style/PatientCss/PNotification.module.css'
import { Link} from 'react-router-dom'
function PNotification() {
    let[notif,setnotif]=useState([{
           id: "45353757485",
           patientId: "583954583",
           patientName: "Harshit Mishra",
           appointmentBookingTime: "01/02/2025 1:30 PM",
           status: "Completed",
           appointmentTime: "01/02/2025 2:30 PM"
         },
         {
           id: "4535dfdff86",
           patientId: "53vder4584",
           patientName: "Doe",
           appointmentBookingTime: "05/06/2023 5:40 PM",
           status: "Pending",
           appointmentTime: "05/06/2023 6:30 PM"
         },
         {
           id: "45353757486",
           patientId: "583954584",
           patientName: "John Doe",
           appointmentBookingTime: "02/02/2025 3:30 PM",
           status: "Scheduled",
           appointmentTime: "02/02/2025 4:30 PM"
         }])
  return (
    <div>
      <h2 className={style.h2}>Notification</h2>
      <table className={style.table}>
        <tbody>
            <tr className={style.tr}>
                <th>Appointment id</th>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Appointment Booking time</th>
                <th>Status</th>
                <th>Appointment Time</th>
                <th>Visit</th>
             </tr>
             {notif.map((notification,index)=>{
                return <tr className={style.data} key={index}>
                 <td>{notification.id}</td>
                 <td>{notification.patientId}</td>
                 <td>{notification.patientName}</td>
                 <td>{notification.appointmentBookingTime}</td>
                 <td className={notification.status=="Completed"?style.complete:notification.status=="Pending"?style.pending:style.scheduled}>{notification.status}</td>
                 <td>{notification.appointmentTime}</td>
                 <td><Link to='/DoctorDetail'><button className={notification.status=="Completed"?style.completebtn:notification.status=="Pending"?style.pendingbtn:style.scheduledbtn} id={style.btn}>view</button> </Link></td>
             
             </tr>
             })}
           
        </tbody>
      </table>
    </div>
  )
}

export default PNotification
