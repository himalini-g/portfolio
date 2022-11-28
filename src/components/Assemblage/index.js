import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

import assemblage1 from '../../public/images/assemblage/web_1.jpg'
import assemblage2 from '../../public/images/assemblage/web_2.jpg'

const media = {
  slideshow: [assemblage1, assemblage2],
  slideshow_descriptions: ['assemblage 1', 'assemblage 2'],

}
const description = 
  `Titles: Radioactive Food Web 1,  Radioactive Food Web 2 
  Media: P5js, AxiDraw plotter drawing, paper, pen
  Statement: I coded a small p5js app to produce SVG drawings of animals 
  with deformed/extra/ missing limbs. I then specified where the limbs 
  and head are with the app. I then brought these hand drawn animals into 
  a separate p5js to randomly assemble them into a food web. The program 
  then exports out an SVG. I then plotted that SVG to produce the two 
  drawings. The process to produce the two drawings was complicated 
  because I plan to use the same tools I used to produce them in other 
  works. It made a pipeline for me to produce other assembled drawings 
  easily. These two drawings are different assemblages of the same animal 
  drawings. Certain drawings of animals are repeated across the two webs. 
  These two drawings depict a food web for a radioactive biome. The 
  algorithm assembles the web to show the warped predator prey 
  interactions between the extra heads that can eat and the extra 
  limbs that can be eaten. UR MOM`
  



const Assemblage = () => {
  return (
    <SlideShowDescription media={media} description={description}/>
  )
}

export default Assemblage