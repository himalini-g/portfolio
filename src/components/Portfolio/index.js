import './index.scss'
import '../../App.scss'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <NavLink to="/portfolio/hairy-blobs"> Blobs </NavLink>
        <NavLink to="/portfolio/gutenberg-clock"> Gutenberg clock </NavLink>
        <NavLink to="/portfolio/kollywood-faces"> Bollywood faces </NavLink>
        <NavLink to="/portfolio/quiet-pond"> quiet pond </NavLink>
        <NavLink to="/portfolio/truchet"> truchet </NavLink>
        <NavLink to="/portfolio/assemblage"> assemblage </NavLink>
    </div>
  )
}

export default Portfolio;