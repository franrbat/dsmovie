import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState,useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";   //importando o retorno do serviço de movies, na parte do MoviePages

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);  //Hooks - Manter estado no componente




     //faz a requisição. Executar algo dps que a requisição chegar (than)
    /*axios.get(`${BASE_URL}/movies?page=0`).then(response =>{
            const data = response.data  as MoviePage;    //joga a resposta da requisição do serviço na variavel data
            setPageNumber(data.number);  //traz a pagina que está trazendo no request (que nesse caso estou informando na url da linha do axios)
        });*/

        useEffect(() =>{
            //jogando essa lógica dentro do Hooks useEfeect ele vai ser executado apenas uma x
            axios.get(`${BASE_URL}/movies?page=0`).then(response =>{
                const data = response.data  as MoviePage;    
                setPageNumber(data.number);  
            })
        },[])   //recebe 2 argumento (uma função a ser executada e [] uma lista de obejtos que vai observar - sempre q alterar algo nos objetos ele vai executar a função de novo)
               //se a lista estiver vazia, ele só vai executar a função quando a pagina for carregada

    return (
        <>
            <p> {pageNumber} </p>
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