package com.MedArchiv.MedArchiv.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Repository.DoctorRepository;
@Service
public class DoctorServiceImplements implements DoctorService{

	@Autowired
	private DoctorRepository doctorRepository;


	@Override
	public List<Doctor> getAllDoctor() {
		return (List<Doctor>) doctorRepository.findAll();
	}
	public Doctor getDoctorById(Long id)
	{
			return doctorRepository.findById(id).orElse(null);
	}

}
