package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Alerts;
import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.AlertsRepository;
import com.mycareer.api.repository.JobRepository;

@Service
public class AlertsService {
	
	@Autowired
	private AlertsRepository alertsRepository;

	public Alerts update(Long code, Alerts alert) {
		Alerts saveAlert = findByCode(code);
		
		BeanUtils.copyProperties(alert, saveAlert, "code");
		return alertsRepository.save(saveAlert);
	}


	public Alerts findByCode(Long code) {
		Alerts saveAlert = alertsRepository.findOne(code);
		if (saveAlert == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveAlert;
	}
	
}
