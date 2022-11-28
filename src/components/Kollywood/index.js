import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'

import bhoomi from '../../public/images/kollywood/Bhoomi.jpg'
import calls from '../../public/images/kollywood/Calls.jpg'
import chakra from '../../public/images/kollywood/Chakra.jpg'
import chennayil from '../../public/images/kollywood/Chennayil_Oda_Oda.jpg'
import chidambaram from '../../public/images/kollywood/Chidambaram_Railway_Gate.jpg'
import eeswaran from '../../public/images/kollywood/Eeswaran.jpg'
import kabadadaari from '../../public/images/kollywood/Kabadadaari.jpg'
import kamali from '../../public/images/kollywood/Kamali_From_Nadukkaveri.jpg'
import kasa from '../../public/images/kollywood/kasa_kasa.jpg'
import master from '../../public/images/kollywood/Master.jpg'
import mirugaa from '../../public/images/kollywood/Mirugaa.jpg'
import naanum from '../../public/images/kollywood/Naanum_Single_Thaan.jpg'
import parris from '../../public/images/kollywood/Parris_Jeyaraj.jpg'
import pazhagiya from '../../public/images/kollywood/Pazhagiya_Naatkal.jpg'
import thallumaala from '../../public/images/kollywood/Thallumaala.jpg'
import trip from '../../public/images/kollywood/Trip.jpg'
import v from '../../public/images/kollywood/V.jpg'

const movies = {
  slideshow: 
    [bhoomi, calls, chakra, 
    chennayil, chidambaram, eeswaran, 
    kabadadaari, kamali, kasa,
    master, mirugaa, naanum,
    parris, pazhagiya, thallumaala,
    trip, v],

  slideshow_descriptions: 
    ['bhoomi','calls', 'chakra',
     'chennayil', 'chidambaram', 'eeswaran',
     'kabadadaari', 'kamali', 'kasa', 
     'master', 'mirugaa', 'naanum',
     'parris', 'pazhagiya', 'thallumaala',
     'trip', 'v'],
}

const Kollywood = () => {
  return (
  <div className='kollywood-container'>
      <Slideshow media={movies}/>
      <div className='kollywood-description'>
          Mediums: Processing, AxiDraw, Pen
          Statement: this is a generative, looping animation/
          Each GIF is the same algorithim with different parameters. I wrote 
          this algorithm from scratch in Processing using a combination of
          metaballs and vector fields. Each hairy blob is a metaball, which 
          is a gravity simulation that produces the effect of the hairy 
          balls glop and unglop like a lava lamp. To produce the hairy 
          surface I use a vector field on top of the metaballs. I then 
          fine tuned the algorithm’s parameters to give myself handles to 
          produce varying animations.
      </div>
      
  </div>)
}

export default Kollywood


