package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Doctor {

	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	@Column(unique = true)
	private String EmailId;
	private String Password;
	@Column(unique = true)
	private String PhoneNo;
	private String Specialization;
	private String Qualification;
	private String Experience;
	@Column(unique = true)
	private String LicenceNumber;
	private Date  CreatedDate;
	private Date DOB;
	private int age;
	private String Gender;
	private String AreaOfPractice;
	private String State;
	private String Country;
	private String AboutDoctor;
	private Long PatientCount;
	private Long AppointmentCount;
	public Doctor(Long id, String emailId, String password, String phoneNo, String specialization, String qualification,
			String experience, String licenceNumber, Date createdDate, Date dOB, int age, String gender,
			String areaOfPractice, String state, String country, String aboutDoctor, Long patientCount,
			Long appointmentCount) {
		super();
		Id = id;
		EmailId = emailId;
		Password = password;
		PhoneNo = phoneNo;
		Specialization = specialization;
		Qualification = qualification;
		Experience = experience;
		LicenceNumber = licenceNumber;
		CreatedDate = createdDate;
		DOB = dOB;
		this.age = age;
		Gender = gender;
		AreaOfPractice = areaOfPractice;
		State = state;
		Country = country;
		AboutDoctor = aboutDoctor;
		PatientCount = patientCount;
		AppointmentCount = appointmentCount;
	}
	public Doctor() {
		super();
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getEmailId() {
		return EmailId;
	}
	public void setEmailId(String emailId) {
		EmailId = emailId;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		PhoneNo = phoneNo;
	}
	public String getSpecialization() {
		return Specialization;
	}
	public void setSpecialization(String specialization) {
		Specialization = specialization;
	}
	public String getQualification() {
		return Qualification;
	}
	public void setQualification(String qualification) {
		Qualification = qualification;
	}
	public String getExperience() {
		return Experience;
	}
	public void setExperience(String experience) {
		Experience = experience;
	}
	public String getLicenceNumber() {
		return LicenceNumber;
	}
	public void setLicenceNumber(String licenceNumber) {
		LicenceNumber = licenceNumber;
	}
	public Date getCreatedDate() {
		return CreatedDate;
	}
	public void setCreatedDate(Date createdDate) {
		CreatedDate = createdDate;
	}
	public Date getDOB() {
		return DOB;
	}
	public void setDOB(Date dOB) {
		DOB = dOB;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getAreaOfPractice() {
		return AreaOfPractice;
	}
	public void setAreaOfPractice(String areaOfPractice) {
		AreaOfPractice = areaOfPractice;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public String getCountry() {
		return Country;
	}
	public void setCountry(String country) {
		Country = country;
	}
	public String getAboutDoctor() {
		return AboutDoctor;
	}
	public void setAboutDoctor(String aboutDoctor) {
		AboutDoctor = aboutDoctor;
	}
	public Long getPatientCount() {
		return PatientCount;
	}
	public void setPatientCount(Long patientCount) {
		PatientCount = patientCount;
	}
	public Long getAppointmentCount() {
		return AppointmentCount;
	}
	public void setAppointmentCount(Long appointmentCount) {
		AppointmentCount = appointmentCount;
	}
	@Override
	public String toString() {
		return "Doctor [Id=" + Id + ", EmailId=" + EmailId + ", Password=" + Password + ", PhoneNo=" + PhoneNo
				+ ", Specialization=" + Specialization + ", Qualification=" + Qualification + ", Experience="
				+ Experience + ", LicenceNumber=" + LicenceNumber + ", CreatedDate=" + CreatedDate + ", DOB=" + DOB
				+ ", age=" + age + ", Gender=" + Gender + ", AreaOfPractice=" + AreaOfPractice + ", State=" + State
				+ ", Country=" + Country + ", AboutDoctor=" + AboutDoctor + ", PatientCount=" + PatientCount
				+ ", AppointmentCount=" + AppointmentCount + "]";
	}
	
}
