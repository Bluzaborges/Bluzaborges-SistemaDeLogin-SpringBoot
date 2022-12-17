import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FormInput(props){
    return (
      <>
      <label className="label-input" htmlFor="">
         <span className={props.span}>
            <FontAwesomeIcon icon={props.icon}/>
         </span>
         <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
      </label>
      </>
    )
 }