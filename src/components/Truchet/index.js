import './index.scss'
import '../../App.scss'
import Image from '../Image'
import SlideShowDescription from '../SlideShowDescription'

import truchet1 from '../../public/images/truchet/truchet_1.jpg'
import truchet2 from '../../public/images/truchet/truchet_2.jpg'
import truchet3 from '../../public/images/truchet/truchet_3.jpg'
import truchet4 from '../../public/images/truchet/truchet_4.jpg'
import truchet0 from '../../public/images/truchet/truchet_0.gif'
const images =  [truchet0,truchet1, truchet2, truchet3, truchet4];
const media = {
  slideshow: images.map(image => <Image imageSource={image}/>),
  slideshow_descriptions: ['truchet0', 'truchet 1', 'truchet 2','truchet 3','truchet 4'],
}
const header = `Body Truchet Tiling`
const medium = `Medium: plotter, pen, p5.js`
const size = `Size: 4' x 3'`
const description = `
Description: A Truchet tiling is constructed from 16 unique tiles. It generates a pattern such that the individual tiles in it are connected to their neighbors rather than disjoint random placement. This is done by placing tiles left to right top to bottom. Each new tile is generated and selected so that it connects with its neighbor to the left and above. I hand drew tiles of 
hairy body parts to create a macabre body pattern composed of interconnected limbs. 
There are “exceptions” to the rule set to create funny moments in the piece. I added the 
“Creation of Adam” hands reaching to god. I also added some variation  in the 
hands and the feet (middle fingers, peace signs, acrylics, etc). To sign my work 
I included the sign language for HIMA in the bottom right.
`
const Truchet = () => {
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media={media} description={description} item1={medium} item2={size}/>
    </div>
  )
}

export default Truchet