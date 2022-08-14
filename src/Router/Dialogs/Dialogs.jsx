// import React from "react"
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './Message/Message'

const Dialogs = (props) => {
 
  let dialogsElement = props.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
  let messagesElement = props.messagesData.map(mess => <MessageItem message={mess.message} />)

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