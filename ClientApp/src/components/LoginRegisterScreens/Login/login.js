import React, { useState } from "react";
import Botao from "../../UI/Botao";
import FormInput from "../../UI/FormInput";
import Popup from "../../UI/Popup";
import fetchFunction from "../../../functions/fetchFunction";
import background from "../../../assets/background.png"
import logo from "../../../assets/logo.png"
import "../LoginRegisterScreens.css"
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Login({history}) {

   const [formLogin, setFormLogin] = useState({email: "", password: ""});
   const [showPopup, setShowPopup] = useState(false);
   const [popupText, setPopupText] = useState("");

   const setEmail = (event) => {
      setFormLogin({...formLogin, email: event.target.value});
   }

   const setPassword = (event) => {
      setFormLogin({...formLogin, password: event.target.value});
   }

   const onLogin = async (event) => {
      event.preventDefault();

      const response = await fetchFunction("http://localhost:8080/api/v1/login", "POST", undefined, formLogin);

      console.log("response", response);
      var responseContent;

      if (!response.ok){
         responseContent = await response.json();
         setShowPopup(true);
         setPopupText(responseContent.message);
         return;
      }

      localStorage.setItem("token", responseContent);
      history.push("/");
   }

   const onRegister = () => {
      history.push("/register")
   }

   return (
      <>
      <div className="login-register-screens">
      <img alt="background" src={background} className="background-img"></img>
      <div className="container">
         <div className="content first-content">
            <div className="first-column">
               <img className="image" src={logo} alt="logo"></img>
            </div>
            <div className="second-column">
               <h2 className="title">Login</h2>
               <form className="form" onSubmit={onLogin}>
                  <FormInput id="email" type="email" placeholder="E-mail" label="E-mail" icon={faEnvelope} span="fas fa-envelope icon" value={formLogin.email} onChange={setEmail}></FormInput>
                  <FormInput id="senha" type="password" placeholder="Senha" label="Senha" icon={faLock} span="fas fa-lock icon" value={formLogin.password} onChange={setPassword}></FormInput>
                  <div className="checkbox">
                     <input id="checkbox1" type="checkbox"></input>
                     <label htmlFor="checkbox1">Lembrar</label>
                     <a className="forgot-pw" href="/login">Esqueceu sua senha?</a>
                  </div>
                  <Botao text="Acessar" type="primary" submit></Botao>
                  <Botao text="Registrar" type="secondary" submit onClick={onRegister}></Botao>
               </form>
            </div>
            <Popup trigger={showPopup} setTrigger={setShowPopup} type="Login">{popupText}</Popup>
         </div>
      </div>
      </div>
      </>
   );
}