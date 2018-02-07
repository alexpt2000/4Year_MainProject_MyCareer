package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.model.Pessoa;
import com.mycareer.api.repository.filter.JobsFilter;

public interface JobRepository extends JpaRepository<Jobs, Long> {

	public Page<Jobs> findByTitleContaining(String title, Pageable pageable);
	
	@Query(value = "select count(*) as total from Jobs WHERE status like 'Open'", nativeQuery=true)
	public List<BigInteger> TotalJobs();

	
}
