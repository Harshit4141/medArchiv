package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Service.NotificationService;

@RestController
@RequestMapping("/Notificationapi")
@CrossOrigin("*")
public class NotificationController {

	@Autowired
	private NotificationService notificationService;
	
}
