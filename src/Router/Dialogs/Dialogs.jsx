// import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const Dialogs = (props) => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.dialog + " " + s.active}>
        <NavLink to="/dialogs/1">Bad</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/2">Sup</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/3">Grec</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/4">Dod</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/5">Bob</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/6">Marc</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/7">Poll</NavLink></div>
      <div className={s.dialog}><NavLink to="/dialogs/8">Tom</NavLink></div>
    </div>
    <div className={s.messages}>
      <div className={s.dialog}>Hi!</div>
      <div className={s.dialog}>How old are you</div>
      <div className={s.dialog}>Where are you from</div>
    </div>
  </div>
  )
}

export default Dialogs