import { useEffect, useState } from 'react'
import './index.scss'
import '../../App.scss'

const About = () => {
  

  return (
    <div className='box'>
        <div className = 'header'>
            artist statement
        </div>
          I'm a new media artist from Carnegie Mellon.
          For the last couple years I've been treating myself
          more seriously as a computer scientist rather than an artist.
          I want that to change. I want to keep making work with 
          physical objects and code that evoke the bodily and bring
          joy to viewers. I want to use code as a tool of funny magic
          on an image rather than an optimization in Facebook's hate s
          peech detector. 
        <div className = 'header'>
            contact info
        </div>
            hgururaj [at] andrew [dot] cmu [dot] edu
    </div>
    
  )
}

export default About