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
          I like cracking jokes with people. When people see my work, I want it to feel like there’s a joke they’re in on. Something obvious that takes a second to appreciate and laugh with me about. It doesn’t have to be incredibly meaningful, it could be a butt or weirdly hairy ball. I especially strive for this humor when I make art with code. Generative or coding based artworks (I find) sometimes feel geometric and a little sterile because of the particulars of the medium. I try to avoid that as much as possible.
        <div className = 'header'>
            contact info
        </div>
            hgururaj [at] andrew [dot] cmu [dot] edu
    </div>
    
  )
}

export default About