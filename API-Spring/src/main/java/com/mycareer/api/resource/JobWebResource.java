package com.mycareer.api.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.model.Lancamento;
import com.mycareer.api.repository.JobRepository;
import com.mycareer.api.repository.filter.JobsFilter;
import com.mycareer.api.repository.filter.LancamentoFilter;
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


//	@GetMapping("/{code}") // @PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA') and #oauth2.hasScope('read')")
//	public ResponseEntity<Jobs> findByCode(@PathVariable Long code) {
//		Jobs job = jobRepository.findOne(code);
//		return job != null ? ResponseEntity.ok(job) : ResponseEntity.notFound().build();
//	}

	@GetMapping //@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA')")
	public Page<Jobs> find(@RequestParam(required = false, defaultValue = "%") String title, Pageable pageable) {
		return jobRepository.findByTitleContaining(title, pageable);

	}
	

}
