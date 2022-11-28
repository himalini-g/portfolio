import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'

import pond1 from '../../public/images/quiet_pond/pond_1.png'
import pond2 from '../../public/images/quiet_pond/pond_2.png'
import pond3 from '../../public/images/quiet_pond/pond_3.png'
import pond4 from '../../public/images/quiet_pond/pond_4.png'
import pond5 from '../../public/images/quiet_pond/pond_5.png'
import pond6 from '../../public/images/quiet_pond/pond_6.png'
import pond7 from '../../public/images/quiet_pond/pond_7.mov'

const pond = {
  slideshow: [pond1, pond2, pond3, pond4, pond5, pond6, pond7],
  slideshow_descriptions: ['pond 1', 'pond 2','pond 3','pond 4', 'pond 5', 'pond 6', 'pond 7'],
}


const QuietPond = () => {
  return (
    <div>
       <div className="youtube-container">
      <iframe classaName='youtube-iframe' width="560" height="315" src="https://www.youtube.com/embed/ApSSeLzOVnw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      mediums: Maya
      I made this animation short as a study of color and lighting.
      I picked the muted green foliage to offset with the blue of the wings and
      yellow of the fireflies light. The lighting was selected to put the frog in minor
    </div>
    <Slideshow media={pond}/>

    </div>
   
  )
}

export default QuietPond;