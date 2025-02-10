package com.MedArchiv.MedArchiv.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	@Column(unique = true)
	private String EmailId;
	private String Name;
	private String Password;
	private long DoctorCount;
	private long PatientCount;
	public Admin(long id, String emailId, String name, String password, long doctorCount, long patientCount) {
		super();
		Id = id;
		EmailId = emailId;
		Name = name;
		Password = password;
		DoctorCount = doctorCount;
		PatientCount = patientCount;
	}
	public Admin() {
		super();
	}
	public long getId() {
		return Id;
	}
//	public void setId(long id) {
//		Id = id;
//	}
	public String getEmailId() {
		return EmailId;
	}
	public void setEmailId(String emailId) {
		EmailId = emailId;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public long getDoctorCount() {
		return DoctorCount;
	}
	public void setDoctorCount(long doctorCount) {
		DoctorCount = doctorCount;
	}
	public long getPatientCount() {
		return PatientCount;
	}
	public void setPatientCount(long patientCount) {
		PatientCount = patientCount;
	}
	@Override
	public String toString() {
		return "Admin [Id=" + Id + ", EmailId=" + EmailId + ", Name=" + Name + ", Password=" + Password
				+ ", DoctorCount=" + DoctorCount + ", PatientCount=" + PatientCount + "]";
	}
	
}
