// import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (<div className={s.dialog + " " + s.active}>
    <NavLink to={path}>{props.name}</NavLink></div>)
}

const MessageItem=(props)=>{
  return ( <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>

      <DialogItem name="Bads" id="1" />
      <DialogItem name="Sup" id="2" />
      <DialogItem name="Grec" id="3" />
      <DialogItem name="Dod" id="4" />
      <DialogItem name="Bob" id="5" />
      <DialogItem name="Marc" id="6" />
      <DialogItem name="Poll" id="7" />
      <DialogItem name="Tom" id="8" />
    </div>
    <div className={s.messages}>
     <MessageItem message="Hi"/>
     <MessageItem message="How are you?"/>
     <MessageItem message="What do you want?"/>
    </div>
  </div>
  )
}

export default Dialogs