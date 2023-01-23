import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'
import Image from '../Image'

import pond1 from '../../public/images/quiet_pond/pond_1.png'
// import pond2 from '../../public/images/quiet_pond/pond_2.png'
// import pond3 from '../../public/images/quiet_pond/pond_3.png'
// import pond4 from '../../public/images/quiet_pond/pond_4.png'
// import pond5 from '../../public/images/quiet_pond/pond_5.png'
// import pond6 from '../../public/images/quiet_pond/pond_6.png'
// import pond7 from '../../public/images/quiet_pond/pond_7.mov'


const images = [pond1];
const stepsMedia = {
  slideshow: images.map(image => <Image imageSource={image}/>),
  slideshow_descriptions: [],
}

const pondVideo = <iframe width="890" height="500" src="https://www.youtube.com/embed/ApSSeLzOVnw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

const header = `Quiet Pond`
const medium =`Medium: Maya`
const duration = `Duration: 0:48`
const description = `
Description: I made this animation short as a study of color and lighting.
I picked the muted green foliage to offset with the bright blue wings and
yellow light from the fireflies. The foliage and the toad share muted color schemes to highlight the fireflies disruption to the quiet pond.
`

const media = {
  slideshow: [pondVideo],
  slideshow_descriptions:[],
};


const QuietPond = () => {

  
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media={media} description={description} item1={medium} item2={duration}/>
    </div>
  )
}

export default QuietPond;