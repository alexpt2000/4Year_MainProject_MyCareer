package com.mycareer.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Alerts;

public interface AlertsRepository extends JpaRepository<Alerts, Long> {

	public Page<Alerts> findByEmailContaining(String email, Pageable pageable);

}
