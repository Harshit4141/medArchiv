package com.MedArchiv.MedArchiv.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Doctor;


@Repository
public interface DoctorRepository extends CrudRepository<Doctor,Long>{

}
