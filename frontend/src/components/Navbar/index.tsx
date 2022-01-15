import {ReactComponent as GithubIcon} from 'assets/img/github.svg';  //componente react que importa a imagem
import './styles.css'

function Navbar(){  //função javaScript

    return(   
         <header>
        <nav className="container"> 
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/franrbat" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/franrbat</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;  //exportar a função