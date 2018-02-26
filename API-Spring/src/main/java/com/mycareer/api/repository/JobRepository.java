package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Jobs;

/**
 * The Interface JobRepository.
 * 
 * @author Alexander Souza
 */
public interface JobRepository extends JpaRepository<Jobs, Long> {

	/**
	 * List jobs web whit status in "Open".
	 *
	 * @return the list
	 */
	@Query(value = "select * from jobs WHERE status like 'Open'", nativeQuery = true)
	public List<Jobs> listJobsWeb();

	/**
	 * Count Total jobs where status is "Open".
	 *
	 * @return the list
	 */
	@Query(value = "select count(*) as total from jobs WHERE status like 'Open'", nativeQuery = true)
	public List<BigInteger> TotalJobs();

}
