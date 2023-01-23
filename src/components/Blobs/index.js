import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'
import Image from '../Image'

import blob1 from '../../public/images/blobs/slideshow_1.gif'
import blob2 from '../../public/images/blobs/slideshow_2.gif'
import blob3 from '../../public/images/blobs/slideshow_3.gif'

const images = [blob1, blob2, blob3];
const media = {
  slideshow: images.map(image => <Image imageSource={image}/>),
  slideshow_descriptions: 
      ['this is really cool and 1 https://objkt.com/asset/hicetnunc/497383',
      'this is really cool and 2',
      'this is really cool and 3'],
}
const header = `Hairy Blobs`
const medium = `Medium: Processing`
const duration = 'Duration: 0:10'
const description = `
Description: This collection of generative, looping animations are produced from the same algorithm with different parameters. The algorithm uses a combination of a physics simulation called metaballs and vector fields to produce the animation. Each hairy blob is a metaball, which 
is a simulated planet where the gravity interacts with the other planets (other hairy blobs) to produce the effect of the hairy blobs coagulation and disentangling like a lava lamp. To produce the hairy surface I use a vector field on top of each of the metaballs. 
`

const Blobs = () => {
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media = {media} item1 = {medium} item2 = {duration} description ={description}/>
    </div>
    
  )
}

export default Blobs