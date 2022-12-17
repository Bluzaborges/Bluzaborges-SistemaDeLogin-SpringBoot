import './home-planos.css';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function HomePlanos({history}) {
   
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
      <div className="home-planos">
         <div className="container">
            <h1>Planos Academia</h1>
            <FontAwesomeIcon icon={faFileInvoice} className="icons"></FontAwesomeIcon>
            <div className="planos">
               <div className="plano mensal">
                  <h3>Plano Mensal</h3>
                  <p>R$ 35,00 ao mês</p>
                  <button className="btn btn-plan1" onClick={onProximo}>Assinar</button>  
               </div>
               <div className="plano trimestral">
                  <h3>Plano Trimestral</h3>
                  <p>10% de desconto</p>
                  <p>R$ 31,50 x 3 meses</p>
                  <span>Total = R$ 94,50</span>
                  <button className="btn btn-plan2" onClick={onProximo}>Assinar</button>
               </div>
               <div className="plano semestral">
                  <h3>Plano Semestral</h3>
                  <p>15% de desconto</p>
                  <p>R$ 27,75 x 6 meses</p>
                  <span>Total = R$ 178,50</span>
                  <button className="btn btn-plan3" onClick={onProximo}>Assinar</button>
               </div>
               <div className="plano anual">
                  <h3>Plano Anual</h3>
                  <p>20% de desconto</p>
                  <p>R$ 28,00 x 12 meses</p>
                  <span>Total = R$ 336,00</span>
                  <button className="btn btn-plan4" onClick={onProximo}>Assinar</button>
               </div>
            </div>
         </div>
      </div>
      </>
   );
}