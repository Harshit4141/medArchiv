package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Service.PatientService;

@RestController
@RequestMapping("/Patientapi")
@CrossOrigin("*")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
}
