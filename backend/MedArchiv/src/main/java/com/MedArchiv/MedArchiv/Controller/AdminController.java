package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.MedArchiv.MedArchiv.Service.AdminService;

@Controller
public class AdminController {

	@Autowired
	private AdminService adminService;
}
