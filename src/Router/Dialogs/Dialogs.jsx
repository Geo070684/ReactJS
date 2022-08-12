// import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (<div className={s.dialog + " " + s.active}>
    <NavLink to={path}>{props.name}</NavLink></div>)
}

const MessageItem = (props) => {
  return (<div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Bads" },
    { id: 2, name: "Sup" },
    { id: 3, name: "Grec" },
    { id: 4, name: "Dod" },
    { id: 5, name: "Bob" },
    { id: 6, name: "Marc" },
    { id: 7, name: "Poll" },
    { id: 8, name: "Tom" },
  ]

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What do you want?" },
    { id: 3, message: "Yo!!!!" },
  ]

  let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElement = messagesData.map(mess => <MessageItem message={mess.message} />)


  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messagesElement}
    </div>
  </div>
  )
}

export default Dialogs