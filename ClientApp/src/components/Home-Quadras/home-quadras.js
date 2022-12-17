import './home-quadras.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faBuromobelexperte} from '@fortawesome/free-brands-svg-icons';
import quadra1 from '../../assets/1.png'
import quadra2 from '../../assets/2.png'
import quadra3 from '../../assets/3.png'
import quadra4 from '../../assets/4.png'
import quadra5 from '../../assets/5.png'
import quadra6 from '../../assets/6.png'

export default function HomeQuadras({history}){

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
        <div className="home-quadras">
            <div className="container">
                <h1>Quadras e Salas</h1>
                <FontAwesomeIcon icon={faBuromobelexperte} className="icons"></FontAwesomeIcon>
                <div className="first-row">
                    <div className="court1">
                        <h3>Quadra de Beach Tennis</h3>
                        <img src={quadra1} alt="img1" />
                    </div>
                    <div className="court2">
                        <h3>Sala de Squash</h3>
                        <img src={quadra2} alt="img2" />
                    </div>
                    <div className="court3">
                        <h3>Quadra de Futsal</h3>
                        <img src={quadra3} alt="img3" />
                    </div>
                </div>
                <div className="second-row">
                    <div className="court4">
                        <h3>Quadra de Tennis</h3>
                        <img src={quadra4} alt="img4" />
                    </div>
                    <div className="court5">
                        <h3>Sala de Artes Marciais</h3>
                        <img src={quadra5} alt="img5" />
                    </div>
                    <div className="court6">
                        <h3>Quadra de Futebol Sete</h3>
                        <img src={quadra6} alt="img6" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}