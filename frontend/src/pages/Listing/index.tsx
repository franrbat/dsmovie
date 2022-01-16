import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";   //importando o retorno do serviço de movies, na parte do MoviePages

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);  //Hooks - Manter estado no componente --inica com 0, então a pagina inicia com 0
    //[objeto , função q vai alterar]


    //faz a requisição. Executar algo dps que a requisição chegar (than)
    /*axios.get(`${BASE_URL}/movies?page=0`).then(response =>{
            const data = response.data  as MoviePage;    //joga a resposta da requisição do serviço na variavel data
            setPageNumber(data.number);  //traz a pagina que está trazendo no request (que nesse caso estou informando na url da linha do axios)
        });*/

        //faz a leitura do MoviePage- que retorna no final do serviço de movie
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true

    })

    useEffect(() => {
        //jogando essa lógica dentro do Hooks useEfeect ele vai ser executado apenas uma x
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        })
    }, [pageNumber])   //recebe 2 argumento (uma função a ser executada e [] uma lista de obejtos que vai observar - sempre q alterar algo nos objetos ele vai executar a função de novo)
    //se a lista estiver vazia, ele só vai executar a função quando a pagina for carregada


    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    //quando cliquei no botão na tela, chamo o Pagination (que tem a logica do pagina +-1) e executo o onChange(handlePageChange), no handlePageChange eu passo o numero da pagina e dentro dele eu seto o PageNumber
    // e sempre q o pageNumber mudar, o meu useEffect é executado novamente, assim chamando a URL do serviço e passando o numero da pagina

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="conteiner">   {/*comando boots*/}
                <div className="row">
                    {page.content.map(item =>           //para cada item da minha lista que i serviço retornar, eu vou executar o html 
                                                         //tem q ter um key para requisição, por isso acrescentamos key e atribuidos o id
                        (
                            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">   
                                <MovieCard movie={item} />
                            </div> 
                        )
                    )}
                </div>
            </div>

             {/* <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">     {/*comando boots cria coluna -sm-6 significa q esse div vai ocupar 6 colunas das 12 colunas do bootstrap- que dizer q cada card vai ocupar metade do meu container do bootstrap*//*col-lg-4 a partir da largura da pagina 992 cada card vai ocupar 4 das 12 colunas*//*col-xl-3 a partir da largura da pagina 1200 cada card vai ocupar 3 das 12 colunas*/ /*mb-3 acrescenta uma margem pra a linha de baixo*
                        <MovieCard movie={movie} />                              /*o MovieCard quem tem o Layout de td o Card - botão/estrelas*  
                            </div>  */}
            </>
                          
            )
}

            export default Listing;