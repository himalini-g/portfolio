import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'


const SlideShowDescription = ({media, description}) => {
  return (
    <div className='slideshow-description-container'>
        <Slideshow media={media}/>
        <div className='description-container'>
          {description}
        </div>
    </div>
  )
}

export default SlideShowDescription