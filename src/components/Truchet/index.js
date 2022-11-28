import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

import truchet1 from '../../public/images/truchet/truchet_1.jpg'
import truchet2 from '../../public/images/truchet/truchet_2.jpg'
import truchet3 from '../../public/images/truchet/truchet_3.jpg'
import truchet4 from '../../public/images/truchet/truchet_4.jpg'
import truchet0 from '../../public/images/truchet/truchet_0.gif'

const media = {
  slideshow: [truchet0,truchet1, truchet2, truchet3, truchet4],
  slideshow_descriptions: ['truchet0', 'truchet 1', 'truchet 2','truchet 3','truchet 4'],
}

const description = 
`
I decided to revise my work on the truchet body tiling project. This essentially 
included me revising my work flow on getting hand drawn tiles into my truchet
quickly to make “exceptions” to my rule set and create funny moments in the piece.
I added the creation of adam hands reaching to god. I also added some variation 
in the hands and the feet (middle fingers, peace signs, acrylics, etc). 
In line with my hairy framed blobs, I also added a hairy frame to this piece. 
To sign my work I included the sign language for HIMA in the bottom right.
I also tweaked the truchet probabilities per Golan’s suggestion to have less 
piping and more disjoint pieces in the tiling.

Here’s the SVG for the final plot. (this is rendering small. 
click on it to see it larger).
`

const Truchet = () => {

    
  return (
    <SlideShowDescription media={media} description={description}/>
    )
  
}

export default Truchet