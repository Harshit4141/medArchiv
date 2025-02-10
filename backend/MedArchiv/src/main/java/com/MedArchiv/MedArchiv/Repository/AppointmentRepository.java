package com.MedArchiv.MedArchiv.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment,Long>{

}
