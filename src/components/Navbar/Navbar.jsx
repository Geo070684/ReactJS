/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom"


const Navbar = () => {
  return (<nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className = {classN =>classN.isActive? s.activeLink: null}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" className = {navData => navData.isActive? s.activeLink: null}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" className = {navData => navData.isActive? s.activeLink: null}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" className = {navData => navData.isActive? s.activeLink: null}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/setting" className = {navData => navData.isActive? s.activeLink: null}>Setting</NavLink>
    </div>
  </nav>)
}
export default Navbar;