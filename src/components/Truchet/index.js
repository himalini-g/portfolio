import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'

import truchet1 from '../../public/images/truchet/truchet_1.jpg'
import truchet2 from '../../public/images/truchet/truchet_2.jpg'
import truchet3 from '../../public/images/truchet/truchet_3.jpg'
import truchet4 from '../../public/images/truchet/truchet_4.jpg'

const truchet = {
  slideshow: [truchet1, truchet2, truchet3, truchet4],
  slideshow_descriptions: ['truchet 1', 'truchet 2','truchet 3','truchet 4'],
}


const Truchet = () => {
  return (
    <div>
        <Slideshow media={truchet}/>
    </div>
  )
}

export default Truchet