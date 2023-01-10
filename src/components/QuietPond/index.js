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
const media = {
  slideshow: images.map(image => <Image imageSource={image}/>),
  slideshow_descriptions: [],
}
const pondVideo = <iframe width="890" height="500" src="https://www.youtube.com/embed/ApSSeLzOVnw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
const pondDescription = `mediums: Maya
Watch the video!!! its literally 40 seconds long. I made this animation short as a study of color and lighting.
I picked the muted green foliage to offset with the blue of the wings and
yellow of the fireflies light. The lighting was selected to put the frog in minor`;
const pondMedium ="Medium: Maya";
const pondMedia = {
  slideshow: [pondVideo],
  slideshow_descriptions:[],
};


const QuietPond = () => {
  
  
  return (
    <div>
      <SlideShowDescription media={pondMedia} description={pondDescription} item1={pondMedium}/>
      <SlideShowDescription media={media} description="step 1"/>

    </div>
  )
}

export default QuietPond;