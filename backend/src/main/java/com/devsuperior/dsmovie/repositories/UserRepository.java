package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;


	public interface UserRepository extends JpaRepository<User, Long>{		
		
		User findByEmail(String email);  //ele está criando o metodo de busca por email no User... sempre usar o findByCampo que ele criará sozinho pelo JPA
		

	}

