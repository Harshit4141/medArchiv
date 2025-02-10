package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Appointment;


@Service
public interface AppointmentService {
			public Appointment readbyid(int id);
			public Appointment save(Appointment a);
			public Appointment update(Appointment a);
			public void delete(int id);
			public Iterable<Appointment>findAll();
		}