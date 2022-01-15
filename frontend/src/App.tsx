import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";   /*importanto componentes do react - servem para configurar as rotas*/
import Listing from 'pages/Listing';  /*importar componetnes do reacts criados para ativar os componentes em cada rota */
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>   {/* iniciar donfiguração das rotas  */}
      <Navbar />      {/* Todas as paginas terão o config do navbar, por isso ta fora das rotas  */}
      <Routes>
        <Route path="/" element={<Listing />} />             {/* Route vai configurar rota por rota. path / significa o caminho raiz da URL  */}
        <Route path="/form">                                 {/* path /form acrescenta na url /form  */}
          <Route path=":movieId" element={<Form />} />       {/* configura com o Id ára na URL acessar o cod do filme url/form/1 e chama o elemento Form*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;