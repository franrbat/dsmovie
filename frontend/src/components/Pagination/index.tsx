import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Props = {
    page: MoviePage;
    onChange: Function;
}
function Pagination({ page, onChange} : Props) {
//meu page tem o valor da pagina do serviço movie (assim que executo o site e o serviço carrega)
//quando clicar na seta esqueda ele fará o valor da pagina -1 para o evento onChange, e para seta esqeudar +1

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={page.first} onClick={()=> onChange(page.number-1)}>
                    <Arrow />
                </button>
                <p>{`${page.number +1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last}  onClick={()=> onChange(page.number+1)}>
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
        );
}

export default Pagination;