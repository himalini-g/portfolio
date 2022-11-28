import './index.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <NavLink exact="true" to="/"> HOME </NavLink>
        <NavLink to="/about"> ABOUT </NavLink>
        <NavLink to="/portfolio"> PORTFOLIO </NavLink>
    </div>
  )
}

export default Sidebar;