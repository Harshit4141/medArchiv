import React from 'react'
import female from '../../assets/female.png'
import style from '../../Style/DoctorCss/DStatus.module.css'
function DStatus() {
  return (
    <div>
        <div className={style.PCard}>
            <div className={style.imagecard}>
                <div className={style.img}><img src={female} alt=""  /></div>
                <div className={style.name}>
                    <h2>Dr.Harshit mishra</h2>
                    <p>Heart</p>
                </div>
            </div>
            <div className={style.detail}> 
                <div className={style.info}>
                    <h3>Your Details</h3>
                    <table className={style.table}>
                        <tbody>
                            <tr>
                                <td className={style.data}>Qualification</td>
                                <td>MBBS</td>
                            </tr>
                            <tr>
                                <td className={style.data}>Experience</td>
                                <td>5 year</td>
                            </tr>
                            <tr>
                                <td className={style.data}>Licence number</td>
                                <td>45547838293</td>
                            </tr>
                            <tr>
                                <td className={style.data}>Area of Practice</td>
                                <td>Heart</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className={style.status}>
                    <h3>Status : </h3>
                    <div>
                        <h1>Pending</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DStatus
