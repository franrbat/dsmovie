package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;

@RestController
@RequestMapping(value = "/movies")  //endereço que vou acessar no navegador
public class MovieController {

	//dependencia do service -- o @Autowired mostra  a dependencia
	@Autowired  
	private MovieService service;
	
	@GetMapping    //mostra que o metodo é get
	public Page<MovieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
		/*método que procura por todos os filmes com paginação*/
	}
	
	@GetMapping(value = "/{id}")
	public MovieDTO findById(@PathVariable Long id){   //@PathVariable para ser o parametro do serviço
		return service.findById(id);
		/*método que procura filmes por id*/
	}
}
