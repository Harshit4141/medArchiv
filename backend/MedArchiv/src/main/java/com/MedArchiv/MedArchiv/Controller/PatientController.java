package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.MedArchiv.MedArchiv.Service.PatientService;

@Controller
public class PatientController {

	@Autowired
	private PatientService patientService;
}
