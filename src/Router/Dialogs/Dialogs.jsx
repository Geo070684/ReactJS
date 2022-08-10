// import React from "react"
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.dialog + " " + s.active}>Bad</div>
      <div className={s.dialog}>Sup</div>
      <div className={s.dialog}>Grec</div>
      <div className={s.dialog}>Petr</div>
      <div className={s.dialog}>Grud</div>
      <div className={s.dialog}>Seric</div>
      <div className={s.dialog}>Perec</div>
      <div className={s.dialog}>Bob</div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>Hi!</div>
      <div className={s.message}>How old are you</div>
      <div className={s.message}>Where are you from</div>
    </div>
  </div>
  )
}

export default Dialogs