import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //faz a requisição. Executar algo dps que a requisição chegar (than)
axios.get(`${BASE_URL}/movies?page=1&size=12`).then(response =>{
        console.log(response.data)
    });


    return (
        <>
            <Pagination />
            <div className="conteiner">   {/*comando boots*/}
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">     {/*comando boots cria coluna -sm-6 significa q esse div vai ocupar 6 colunas das 12 colunas do bootstrap- que dizer q cada card vai ocupar metade do meu container do bootstrap*/}
                        <MovieCard />                                     {/*col-lg-4 a partir da largura da pagina 992 cada card vai ocupar 4 das 12 colunas*/}
                    </div>                                                {/*col-xl-3 a partir da largura da pagina 1200 cada card vai ocupar 3 das 12 colunas*/}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">     {/*mb-3 acrescenta uma margem pra a linha de baixo*/}
                        <MovieCard />   {/*o MovieCard quem tem o Layout de td o Card - botão/estrelas*/}
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;