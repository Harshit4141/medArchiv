package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;
import com.MedArchiv.MedArchiv.Model.Patient;

@Service
public interface PatientService {
		public Patient readbyid(long id);
		public Patient save(Patient p);
		public Patient update(Patient p);
		public void delete(int id);
		public Iterable<Patient>findAll();
		public String getName(long id);
	}
