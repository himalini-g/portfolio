import './index.scss'
import '../../App.scss'
import Slideshow from '../Slideshow'


const SlideShowDescription = ({media, description, item1, item2}) => {
  let item1Html;
  if(item1 !== null){
    item1Html = 
    <div>
        {item1}
    </div>;
  } else {
    item1Html = <></>;
  }
  let item2Html;
  if(item2 !== null){
    item2Html = 
    <div>
        {item2}
    </div>;
  } else {
    item1Html = <></>;
  }
  
  return (
    <div className='slideshow-description-container'>
        <Slideshow media={media}/>
          
        <div className='description-container'>
          {item1Html}
          {item2Html}
          {description}
        </div>
    </div>
  )
}

export default SlideShowDescription