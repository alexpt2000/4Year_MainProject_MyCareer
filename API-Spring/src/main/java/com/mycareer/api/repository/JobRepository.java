package com.mycareer.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.model.Pessoa;
import com.mycareer.api.repository.filter.JobsFilter;

public interface JobRepository extends JpaRepository<Jobs, Long> {

	public Page<Jobs> findByTitleContaining(String title, Pageable pageable);

	
}
