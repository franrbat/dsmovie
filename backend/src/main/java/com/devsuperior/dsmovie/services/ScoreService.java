package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());  //buscar no banco de dados por email e joga no user
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);  //para manter o objeto atualizado
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();    //como ele retorna option, tenho q colocar o get p recuperar o dado dentro ele
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		//vou correr a lista do score acumulando o score
		double sum = 0.0;
		for (Score s : movie.getScores())
		{
			sum = sum + s.getValue();
		}
		
		//calculo a média do filme (soma / tamanho da lista de score)		
		double avg = sum / movie.getScores().size();
		
		
		//passa os valores da media e do count
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		
		movie = movieRepository.save(movie);
		
		
		return new MovieDTO(movie);
		
	}

}
