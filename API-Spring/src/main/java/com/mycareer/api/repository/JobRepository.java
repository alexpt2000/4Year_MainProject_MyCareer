package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Jobs;

public interface JobRepository extends JpaRepository<Jobs, Long> {

	@Query(value = "select * from jobs WHERE status like 'Open'", nativeQuery = true)
	public List<Jobs> listJobsWeb();

	@Query(value = "select count(*) as total from jobs WHERE status like 'Open'", nativeQuery = true)
	public List<BigInteger> TotalJobs();

}
