package com.mycareer.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;

@RestController
@RequestMapping("/jobsweb")
public class JobWebResource {

	@Autowired
	private JobRepository jobRepository;

	@GetMapping
	public List<Jobs> listJobsWeb() {
		return jobRepository.listJobsWeb();

	}

}
