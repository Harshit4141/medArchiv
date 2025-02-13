package com.MedArchiv.MedArchiv.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Patient;


@Repository
public interface PatientRepository extends CrudRepository<Patient,Long>{

}
