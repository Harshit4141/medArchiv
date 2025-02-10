package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Patient;
import com.MedArchiv.MedArchiv.Repository.PatientRepository;

@Service
public class PatientServiceImplements implements PatientService{

	@Autowired
	private PatientRepository patientRepository;
	@Override
	public Patient readbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Patient save(Patient p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Patient update(Patient p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Iterable<Patient> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
