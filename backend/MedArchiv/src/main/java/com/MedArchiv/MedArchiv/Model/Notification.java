package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Notification {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	private long DoctorId;
	private long PatientId;
	private String UserType;
	private String AppointmentTime;
	private Date CreatedAt;
	private String IsRead;
	public Notification(long id, long doctorId, long patientId, String userType, String appointmentTime, Date createdAt,
			String isRead) {
		super();
		Id = id;
		DoctorId = doctorId;
		PatientId = patientId;
		UserType = userType;
		AppointmentTime = appointmentTime;
		CreatedAt = createdAt;
		IsRead = isRead;
	}
	public Notification() {
		super();
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public long getDoctorId() {
		return DoctorId;
	}
	public void setDoctorId(long doctorId) {
		DoctorId = doctorId;
	}
	public long getPatientId() {
		return PatientId;
	}
	public void setPatientId(long patientId) {
		PatientId = patientId;
	}
	public String getUserType() {
		return UserType;
	}
	public void setUserType(String userType) {
		UserType = userType;
	}
	public String getAppointmentTime() {
		return AppointmentTime;
	}
	public void setAppointmentTime(String appointmentTime) {
		AppointmentTime = appointmentTime;
	}
	public Date getCreatedAt() {
		return CreatedAt;
	}
	public void setCreatedAt(Date createdAt) {
		CreatedAt = createdAt;
	}
	public String getIsRead() {
		return IsRead;
	}
	public void setIsRead(String isRead) {
		IsRead = isRead;
	}
	@Override
	public String toString() {
		return "Notification [Id=" + Id + ", DoctorId=" + DoctorId + ", PatientId=" + PatientId + ", UserType="
				+ UserType + ", AppointmentTime=" + AppointmentTime + ", CreatedAt=" + CreatedAt + ", IsRead=" + IsRead
				+ "]";
	}
	
	

}
