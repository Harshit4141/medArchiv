package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import com.MedArchiv.MedArchiv.Service.DoctorService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Doctorapi")
@CrossOrigin("*")
public class DoctorController {

	@Autowired
	private DoctorService doctorservice;
	
	
}
