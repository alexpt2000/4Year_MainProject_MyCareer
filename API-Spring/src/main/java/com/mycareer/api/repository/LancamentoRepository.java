package com.mycareer.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Lancamento;
import com.mycareer.api.repository.lancamento.LancamentoRepositoryQuery;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long>, LancamentoRepositoryQuery {

}
