package com.mycareer.api.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.event.ResourceCreatedEvent;
import com.mycareer.api.model.Jobs;
import com.mycareer.api.model.Pessoa;
import com.mycareer.api.repository.JobRepository;
import com.mycareer.api.repository.PessoaRepository;
import com.mycareer.api.service.JobService;
import com.mycareer.api.service.PessoaService;

@RestController
@RequestMapping("/jobs")
public class JobResource {

	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private JobService jobService;
	
	@Autowired
	private ApplicationEventPublisher publisher;

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> create(@Valid @RequestBody Jobs job, HttpServletResponse response) {
		Jobs saveJob = jobRepository.save(job);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveJob.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveJob);
	}

	@GetMapping("/{code}") // @PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA') and #oauth2.hasScope('read')")
	public ResponseEntity<Jobs> findByCode(@PathVariable Long code) {
		Jobs job = jobRepository.findOne(code);
		return job != null ? ResponseEntity.ok(job) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVER_PESSOA') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		jobRepository.delete(code);
	}
	
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> update(@PathVariable Long code, @Valid @RequestBody Jobs job) {
		Jobs saveJob = jobService.update(code, job);
		return ResponseEntity.ok(saveJob);
	}
	
//	@PutMapping("/{code}/ativo")
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
//	public void updatePropertyEnable(@PathVariable Long code, @RequestBody Boolean ativo) {
//		jobService.atualizarPropriedadeAtivo(code, ativo);
//	}
	
	@GetMapping //@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA')")
	public Page<Jobs> find(@RequestParam(required = false, defaultValue = "%") String title, Pageable pageable) {
		return jobRepository.findByTitleContaining(title, pageable);
	}

}
