package com.mycareer.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Alerts;

/**
 * The Interface AlertsRepository.
 */
public interface AlertsRepository extends JpaRepository<Alerts, Long> {

}
