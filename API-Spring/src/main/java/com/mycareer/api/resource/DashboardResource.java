package com.mycareer.api.resource;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.repository.ApplicantRepository;
import com.mycareer.api.repository.JobRepository;

@RestController
@RequestMapping("/dashboard")
public class DashboardResource {

	@Autowired
	private ApplicantRepository applicantRepository;

	@Autowired
	private JobRepository jobRepository;

	@GetMapping("/totalapplicants")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<BigInteger> loadTotalDashboardAppl() {
		return applicantRepository.TotalApplicants();
	}

	@GetMapping("/totalnewapplicants")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<BigInteger> loadTotalDashboardNewAppl() {
		return applicantRepository.TotalNewApplicants();
	}

	@GetMapping("/totaljobs")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<BigInteger> loadTotalDashboardJobs() {
		return jobRepository.TotalJobs();
	}

}
