import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'

import blob1 from '../../public/images/blobs/slideshow_1.gif'
import blob2 from '../../public/images/blobs/slideshow_2.gif'
import blob3 from '../../public/images/blobs/slideshow_3.gif'

const blob_media = {
    slideshow: [blob1, blob2, blob3],
    slideshow_descriptions: 
        ['this is really cool and 1',
        'this is really cool and 2',
        'this is really cool and 3'],
}


const Blobs = () => {
  return (
    <div className='blob-container'>
        <Slideshow media={blob_media}/>
        <div className='blob-description'>
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
        
    </div>
  )
}

export default Blobs