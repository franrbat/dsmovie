import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";


//receber os dados com argumentos
type Props = {
    movie: Movie;  //tipo do objeto Movie(que recupera o serviço)
}


function MovieCard({movie} : Props) {

    /* dados fixos para carregar os filmes
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };*/

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to ={`/form/${movie.id}`}>  {/* faz o link da rota e cama a função para trazer o id do filme*/}
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );

}

export default MovieCard;