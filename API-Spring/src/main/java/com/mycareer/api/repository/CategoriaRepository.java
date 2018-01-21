package com.mycareer.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
