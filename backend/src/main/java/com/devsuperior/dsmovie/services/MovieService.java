package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	//mostra que a dependcia é do Repository
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		
		/*uso do page pq estou trazendo os dados paginados, por isso tbm o Pageable*/
		Page<Movie> result = repository.findAll(pageable);
		//converter a pagina Movie(Banco de dados) em MovieDTO(para aparecer no Request)
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x)); //o .map vai aplicar uma função a cada elemento da lista (x), para cada elemento de x quero aplicar o new MovieDTO(x)
		return page;
	}
	
	
	//o metodo vai resolver tudo oq é de JPA de transação nessa camada de serviço usa o Transaction e readonly = true fica mais eficiente
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		
		/*já existe método pronto no repositorio*/
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);  //retorno será um MovieDTO que está preparado para a request
		return dto;
	}

}
