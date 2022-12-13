import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

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

const media = {
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
const description =  `

I’m Tamil. Growing up watching Tamil films the skin tone of the female lead
seemed lighter than the male lead even though they’re both south indian. 
I wanted to confirm this reality with the technical tools at my disposal.
If we were to look at the many faces found in a multitude of Tamil films, 
would it be true that the lighter ones are women?  I investigate this in an 
unbiased way using code. This abstracts the decision making process away from 
me. This piece is rhetorical and I ask that the viewer look at the results and 
come to their own conclusions.

Here’s what I did for those that are curious:
<li>Coffee</li>
<li> Find tamil films released in the last year <li>
Download them
Use FFMPEG to downsample their frames to one per half second
Use an ML model to detect the faces in each frame and crop them out
Use k means clustering to estimate the skin tone of each face
Treat the HSV value as a 2D space and pack the images onto a grid where saturation increases from left to right and value increases from top to bottom. 

`

const Kollywood = () => {
  return (
    <SlideShowDescription media={media} description={description}/>
    )
}

export default Kollywood