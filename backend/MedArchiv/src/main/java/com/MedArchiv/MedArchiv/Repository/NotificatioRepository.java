package com.MedArchiv.MedArchiv.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Notification;

@Repository
public interface NotificatioRepository extends CrudRepository<Notification,Long>{

}
