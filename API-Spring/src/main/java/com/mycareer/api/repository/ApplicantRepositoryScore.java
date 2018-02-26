package com.mycareer.api.repository;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Applicants;

/**
 * The Interface ApplicantRepositoryScore.
 */
@Transactional
public interface ApplicantRepositoryScore extends JpaRepository<Applicants, Long> {

	/**
	 * Applicants whit score.
	 *
	 * @return the list
	 */
	@Query(value = "select new map (a.fullname) from applicants a", nativeQuery = true)
	public List<Map<String, Object>> applicantsWhitScore();

}
