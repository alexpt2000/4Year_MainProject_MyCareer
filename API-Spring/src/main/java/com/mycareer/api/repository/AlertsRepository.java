package com.mycareer.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Alerts;

public interface AlertsRepository extends JpaRepository<Alerts, Long> {

}
