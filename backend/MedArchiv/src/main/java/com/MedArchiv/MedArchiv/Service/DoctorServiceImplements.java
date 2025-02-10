package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Repository.DoctorRepository;
@Service
public class DoctorServiceImplements implements DoctorService{

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Override
	public Doctor readbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Doctor save(Doctor d) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Doctor update(Doctor d) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Iterable<Doctor> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
