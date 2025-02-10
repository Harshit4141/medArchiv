package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Repository.AppointmentRepository;
@Service
public class AppointmentServiceImplements implements AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public Appointment readbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Appointment save(Appointment a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Appointment update(Appointment a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Iterable<Appointment> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
