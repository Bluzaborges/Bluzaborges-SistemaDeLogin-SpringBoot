import React, { useState } from "react";
import Botao from "../../UI/Botao";
import FormInput from "../../UI/FormInput";
import Popup from "../../UI/Popup";
import fetchFunction from "../../../functions/fetchFunction";
import background from "../../../assets/background-register.png"
import logo from "../../../assets/logo.png"
import {faLock, faEnvelope, faUser, faIdCard, faSignature } from '@fortawesome/free-solid-svg-icons'

export default function Register({history}) {

   const [formRegister, setFormRegister] = useState({cpf: "", firstName: "", lastName: "", email: "", password: "", confirmPassword: ""});
   const [showPopup, setShowPopup] = useState(false);
   const [popupText, setPopupText] = useState("");

   const setEmail = (event) => {
      setFormRegister({...formRegister, email: event.target.value});
   }

   const setPassword = (event) => {
      setFormRegister({...formRegister, password: event.target.value});
   }

   const setconfirmPassword = (event) => {
      setFormRegister({...formRegister, confirmPassword: event.target.value});
   }

   const setCpf = (event) => {
      setFormRegister({...formRegister, cpf: event.target.value});
   }

   const setFirstName = (event) => {
      setFormRegister({...formRegister, firstName: event.target.value});
   }

   const setLastName = (event) => {
      setFormRegister({...formRegister, lastName: event.target.value});
   }

   const onRegister = async (event) => {
      event.preventDefault();

      const response = await fetchFunction("http://localhost:8080/api/v1/registration", "POST", undefined, formRegister);

      console.log("response", response);

      if (!response.ok){
         const responseContent = await response.json();
         setShowPopup(true);
         setPopupText(responseContent.message);
         return;
      }

      localStorage.setItem("token", response);
      history.push("/login");
   };

   const onVoltar = () => {
      history.push("/login");
   };

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
               <h2 className="title">Criar uma conta</h2>
               <form className="form" onSubmit={onRegister}>
                  <div className="input-group">
                     <FormInput id="firstName" type="name" placeholder="Nome" label="Nome" icon={faUser} span="fas fa-user icon" value={formRegister.firstName} onChange={setFirstName}></FormInput>  
                     <FormInput id="lastName" type="lastname" placeholder="Sobrenome" label="Sobrenome" icon={faSignature} span="fas fa-signature icon" value={formRegister.lastName} onChange={setLastName}></FormInput>
                  </div>
                  <FormInput id="cpf" type="cpf" placeholder="CPF" label="CPF" icon={faIdCard} span="fas fa-id-card icon" value={formRegister.cpf} onChange={setCpf}></FormInput>
                  <FormInput id="email" type="email" placeholder="E-mail" label="E-mail" icon={faEnvelope} span="fas fa-envelope icon" value={formRegister.email} onChange={setEmail}></FormInput>
                  <div className="input-group">
                     <FormInput id="senha" type="password" placeholder="Senha" label="Senha" icon={faLock} span="fas fa-lock icon" value={formRegister.password} onChange={setPassword}></FormInput>
                     <FormInput id="confirmarSenha" type="password" placeholder="Confirmar senha" label="Senha" icon={faLock} span="fas fa-lock icon" value={formRegister.confirmPassword} onChange={setconfirmPassword}></FormInput>
                  </div>
                  <Botao text="Criar conta" type="primary" submit></Botao>
                  <Botao text="Voltar" type="secondary" submit onClick={onVoltar}></Botao>
               </form>
            </div>
            <Popup trigger={showPopup} setTrigger={setShowPopup} type="Login">{popupText}</Popup>
         </div>
      </div>
      </div>
      </>
   );
}