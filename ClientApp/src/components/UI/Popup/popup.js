import React from "react"
import Botao from "../Botao";
import './popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-title">
                    <span className="fas fa-exclamation-triangle fa-3x">
                        <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> 
                    </span>
                </div>
                <div className="popup-title">
                    <h2>{props.type} inválido</h2>           
                </div>
                <div className="popup-description">
                    <p>{props.children}</p>
                </div>
                <div className="popup-button">
                    <Botao text="Tentar novamente" type="popup" submit onClick={() => props.setTrigger(false)}></Botao>
                </div>
            </div>
        </div>
    ) : "";
 }