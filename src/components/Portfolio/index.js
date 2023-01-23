import './index.scss'
import '../../App.scss'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <NavLink to="/portfolio/hairy-blobs"> Hairy Blobs </NavLink>
        <NavLink to="/portfolio/gutenberg-clock"> Gutenberg Clock </NavLink>
        <NavLink to="/portfolio/colorism-in-Kollywood" > Colorism in Kollywood </NavLink>
        <NavLink to="/portfolio/quiet-pond"> Quiet Pond </NavLink>
        <NavLink to="/portfolio/body-truchet-tiling"> Body Truchet Tiling </NavLink>
        <NavLink to="/portfolio/radioactive-food-web"> Radioactive Food Web </NavLink>
    </div>
  )
}

export default Portfolio;