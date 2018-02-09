package com.mycareer.api.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;
import com.mycareer.api.service.JobService;

@RestController
@RequestMapping("/jobsweb")
public class JobWebResource {

	@Autowired
	private JobRepository jobRepository;

	@Autowired
	private JobService jobService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	public Page<Jobs> find(@RequestParam(required = false, defaultValue = "%") String title, Pageable pageable) {
		return jobRepository.findByTitleContaining(title, pageable);

	}

}
