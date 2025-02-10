package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Doctor;

@Service
public interface DoctorService {

	public Doctor readbyid(int id);
	public Doctor save(Doctor d);
	public Doctor update(Doctor d);
	public void delete(int id);
	public Iterable<Doctor>findAll();
}

