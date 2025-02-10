package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.MedArchiv.MedArchiv.Service.DoctorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class DoctorController {

	@Autowired
	private DoctorService doctorservice;
	
	
}
