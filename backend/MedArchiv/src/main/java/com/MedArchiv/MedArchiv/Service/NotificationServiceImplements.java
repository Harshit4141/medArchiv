package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Notification;
import com.MedArchiv.MedArchiv.Repository.AdminRepository;

@Service
public class NotificationServiceImplements implements NotificationService {

	@Autowired
	private AdminRepository notificationRepository;
	@Override
	public Notification readbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Notification save(Notification a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Notification update(Notification a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Iterable<Notification> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
