package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.MedArchiv.MedArchiv.Service.NotificationService;

@Controller
public class NotificationController {

	@Autowired
	private NotificationService notificationService;
	
}
