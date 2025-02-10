package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Notification;

@Service
public interface NotificationService {
	
				public Notification readbyid(int id);
				public Notification save(Notification a);
				public Notification update(Notification a);
				public void delete(int id);
				public Iterable<Notification>findAll();
}
