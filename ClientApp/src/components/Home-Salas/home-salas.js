import './home-salas.css';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import salao1 from '../../assets/salao1.jpeg';
import salao2 from '../../assets/salao2.jpeg';
import salao3 from '../../assets/salao3.jpeg';

export default function HomeSalas({history}){

    const onProximo = () => {
        history.push("/login")
    }

    return (
        <>
        <div className="homepage">
         <header>
            <nav>
               <a className="nav-logo" href="/home">Home</a>
               <div className="nav-icons">
                  <FontAwesomeIcon icon={faFacebook} className="icons"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faTwitter} className="icons"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faInstagram} className="icons"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faWhatsapp} className="icons"></FontAwesomeIcon>
               </div>
               <ul className="nav-list">
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Cadastre-se</a></li>
               </ul> 
            </nav>
         </header>
        </div>
        <div className="home-salas">
            <div className="container">
                <h1>Salas para Eventos</h1>
                <FontAwesomeIcon icon={faGlassCheers} className="icons"></FontAwesomeIcon>
                <div className="salas">
                    <div className="sala-1">
                        <h3>Sala de Eventos 1</h3>
                    <div className="img">
                        <img src={salao1} alt="sala de eventos 1" />
                    </div>
                    <button className="btn btn-salas1" onClick={onProximo}>Assinar</button>
                    </div>
                    <div className="sala-2">
                        <h3>Sala de Eventos 2</h3>
                    <div className="img">
                        <img src={salao2} alt="sala de eventos 2" />
                    </div>
                    <button className="btn btn-salas2" onClick={onProximo}>Assinar</button>
                    </div>
                    <div className="sala-3">
                        <h3>Sala de Eventos 3</h3>
                    <div className="img">
                        <img src={salao3} alt="sala de eventos 3" />
                    </div>
                    <button className="btn btn-salas3" onClick={onProximo}>Assinar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}