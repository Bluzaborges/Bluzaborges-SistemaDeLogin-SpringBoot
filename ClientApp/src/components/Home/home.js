import './home.css';
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';
import { faDumbbell, faFileInvoiceDollar, faGlassCheers, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

export default function Home({history}) {

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
      <div className="container">
         <div className="content first-content">
            <div className="first-column">
               <h2 className="tittle">Bem-Vindo a</h2>
               <img className="image" src={logo} alt="logo"></img>
            </div>
            <div className="second-column">
               <div className="first-line">
                  <button className="btn btn-icon1">
                     <div className="icon-div">
                        <FontAwesomeIcon icon={faDumbbell} span="fas fa-dumbbell" className="icons"></FontAwesomeIcon>
                     </div>
                     <h2 className="btn-tittle">Equipamentos</h2>
                  </button>
                  <button className="btn btn-icon2" onClick={() => {history.push("/quadras")}}>
                     <div className="icon-div">
                        <FontAwesomeIcon icon={faBuromobelexperte} span="fas fa-dumbbell" className="icons"></FontAwesomeIcon>
                     </div>
                     <h2 className="btn-tittle">Quadras</h2>
                  </button>
               </div>
               <div className="second-line">
                  <button className="btn btn-icon3" onClick={() => {history.push("/salas")}}>
                     <div className="icon-div">
                        <FontAwesomeIcon icon={faGlassCheers} span="fas fa-dumbbell" className="icons"></FontAwesomeIcon>
                     </div>
                     <h2 className="btn-tittle">Salas para Eventos</h2>
                  </button>
                  <button className="btn btn-icon4">
                     <div className="icon-div">
                        <FontAwesomeIcon icon={faChalkboardTeacher} span="fas fa-dumbbell" className="icons"></FontAwesomeIcon>
                     </div>
                     <h2 className="btn-tittle">Aulas</h2>
                  </button>
                  </div>
                  <div className="third-line">
                     <button className="btn btn-icon5" onClick={() => {history.push("/planos")}}>
                        <div className="icon-div">
                           <FontAwesomeIcon icon={faFileInvoiceDollar} span="fas fa-dumbbell" className="icons"></FontAwesomeIcon>
                        </div>
                         <h2 className="btn-tittle">Planos</h2>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   );
}
