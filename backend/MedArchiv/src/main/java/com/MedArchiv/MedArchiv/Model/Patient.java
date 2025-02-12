package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	@Column(unique = true)
	private String EmailId;
	@Column(unique = true)
	private String PhoneNumber;
	private Date DOB;
	private String Name;
	private int Age;
	private String Gender;
	private String State;
	private String Country;
	private int Weight;
	private int Height;
	private String BloodGroup;
	private String BloodPressure;
	private String Diabetes;
	private String Allergies;
	private String Disease;
	private String KidneyProblem;
	private String HeartProblem;
	private String DrugUse;
	private String AnxietyAttack;
	private String BreathingProblem;
	
	public Patient(long id, String emailId, String phoneNumber, Date dOB, String name, int age, String gender,
			String state, String country, int weight, int height, String bloodGroup, String bloodPressure,
			String diabetes, String allergies, String disease, String kidneyProblem, String heartProblem,
			String drugUse, String anxietyAttack, String breathingProblem) {
		super();
		Id = id;
		EmailId = emailId;
		PhoneNumber = phoneNumber;
		DOB = dOB;
		Name = name;
		Age = age;
		Gender = gender;
		State = state;
		Country = country;
		Weight = weight;
		Height = height;
		BloodGroup = bloodGroup;
		BloodPressure = bloodPressure;
		Diabetes = diabetes;
		Allergies = allergies;
		Disease = disease;
		KidneyProblem = kidneyProblem;
		HeartProblem = heartProblem;
		DrugUse = drugUse;
		AnxietyAttack = anxietyAttack;
		BreathingProblem = breathingProblem;
	}
	public Patient() {
		super();
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getEmailId() {
		return EmailId;
	}
	public void setEmailId(String emailId) {
		EmailId = emailId;
	}
	public String getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		PhoneNumber = phoneNumber;
	}
	public Date getDOB() {
		return DOB;
	}
	public void setDOB(Date dOB) {
		DOB = dOB;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
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
	public int getWeight() {
		return Weight;
	}
	public void setWeight(int weight) {
		Weight = weight;
	}
	public int getHeight() {
		return Height;
	}
	public void setHeight(int height) {
		Height = height;
	}
	public String getBloodGroup() {
		return BloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		BloodGroup = bloodGroup;
	}
	public String getBloodPressure() {
		return BloodPressure;
	}
	public void setBloodPressure(String bloodPressure) {
		BloodPressure = bloodPressure;
	}
	public String getDiabetes() {
		return Diabetes;
	}
	public void setDiabetes(String diabetes) {
		Diabetes = diabetes;
	}
	public String getAllergies() {
		return Allergies;
	}
	public void setAllergies(String allergies) {
		Allergies = allergies;
	}
	public String getDisease() {
		return Disease;
	}
	public void setDisease(String disease) {
		Disease = disease;
	}
	public String getKidneyProblem() {
		return KidneyProblem;
	}
	public void setKidneyProblem(String kidneyProblem) {
		KidneyProblem = kidneyProblem;
	}
	public String getHeartProblem() {
		return HeartProblem;
	}
	public void setHeartProblem(String heartProblem) {
		HeartProblem = heartProblem;
	}
	public String getDrugUse() {
		return DrugUse;
	}
	public void setDrugUse(String drugUse) {
		DrugUse = drugUse;
	}
	public String getAnxietyAttack() {
		return AnxietyAttack;
	}
	public void setAnxietyAttack(String anxietyAttack) {
		AnxietyAttack = anxietyAttack;
	}
	public String getBreathingProblem() {
		return BreathingProblem;
	}
	public void setBreathingProblem(String breathingProblem) {
		BreathingProblem = breathingProblem;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	@Override
	public String toString() {
		return "Patient [Id=" + Id + ", EmailId=" + EmailId + ", PhoneNumber=" + PhoneNumber + ", DOB=" + DOB
				+ ", Name=" + Name + ", Age=" + Age + ", Gender=" + Gender + ", State=" + State + ", Country=" + Country
				+ ", Weight=" + Weight + ", Height=" + Height + ", BloodGroup=" + BloodGroup + ", BloodPressure="
				+ BloodPressure + ", Diabetes=" + Diabetes + ", Allergies=" + Allergies + ", Disease=" + Disease
				+ ", KidneyProblem=" + KidneyProblem + ", HeartProblem=" + HeartProblem + ", DrugUse=" + DrugUse
				+ ", AnxietyAttack=" + AnxietyAttack + ", BreathingProblem=" + BreathingProblem + "]";
	}
	
	
	
}
