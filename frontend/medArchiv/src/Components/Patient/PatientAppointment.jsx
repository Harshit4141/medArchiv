import React from 'react'
import '../../Style/PatientCss/PatientAppointment.module.css'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
function PatientAppointment() {
  return (
    <div className='PatientAppointment'>
      
      <div className='card'>
        <div>
          <img src={male} className="img" alt="male" title="Harshit mishra" />
        </div>
        <div className="namesection">
          <h3>Harshit Mishra</h3>
          <p className="message">I am writing to express concern about persistent pain and discomfort in my hand.</p>
        </div>
        <div className='buttonSection'>
          <select name="" id="" className='selectTime'>
            <option value="">2:30 AM</option>
            <option value="">1:30 AM</option>
          </select>
          <button>Appoint</button>
        </div>
      </div>
      
      
     
    </div>
  )
}

export default PatientAppointment
