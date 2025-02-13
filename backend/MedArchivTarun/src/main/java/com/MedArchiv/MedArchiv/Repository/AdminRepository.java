package com.MedArchiv.MedArchiv.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.MedArchiv.MedArchiv.Model.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin,Long>{

}
