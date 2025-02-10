package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private long patientId;
	private long DoctorId;
	private String userType;
	private Date AppointmentTime;
	private Date createdAt;
	private String message;
	private String Status;
	public Appointment(long id, long patientId, long doctorId, String userType, Date appointmentTime, Date createdAt,
			String message, String status) {
		super();
		this.id = id;
		this.patientId = patientId;
		DoctorId = doctorId;
		this.userType = userType;
		AppointmentTime = appointmentTime;
		this.createdAt = createdAt;
		this.message = message;
		Status = status;
	}
	public Appointment() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public long getDoctorId() {
		return DoctorId;
	}
	public void setDoctorId(long doctorId) {
		DoctorId = doctorId;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public Date getAppointmentTime() {
		return AppointmentTime;
	}
	public void setAppointmentTime(Date appointmentTime) {
		AppointmentTime = appointmentTime;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patientId=" + patientId + ", DoctorId=" + DoctorId + ", userType="
				+ userType + ", AppointmentTime=" + AppointmentTime + ", createdAt=" + createdAt + ", message="
				+ message + ", Status=" + Status + "]";
	}
	
}
