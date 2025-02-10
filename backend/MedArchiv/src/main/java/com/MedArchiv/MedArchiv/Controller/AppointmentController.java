package com.MedArchiv.MedArchiv.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Service.AppointmentService;

@RestController
@RequestMapping("/Appointmentapi")
@CrossOrigin("*")
public class AppointmentController {

	private AppointmentService appointmentservice;
}
