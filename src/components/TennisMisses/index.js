import './index.scss'
import '../../App.scss'
import Image from '../Image'
import SlideShowDescription from '../SlideShowDescription'

import tennis_miss_1 from '../../public/images/tennis_miss/tennis_miss_1.gif'
import tennis_miss_2 from '../../public/images/tennis_miss/tennis_miss_2.gif'
import tennis_miss_3 from '../../public/images/tennis_miss/tennis_miss_3.gif'
import tennis_miss_4 from '../../public/images/tennis_miss/tennis_miss_4.gif'
import tennis_miss_5 from '../../public/images/tennis_miss/tennis_miss_5.gif'

const images =  [tennis_miss_1, tennis_miss_2, tennis_miss_3, tennis_miss_4, tennis_miss_5]

const media = {
  slideshow: images.map(image => <Image imageSource={image}/>),
  slideshow_descriptions: 
    []
}

const header = `Tennis Misses`
const medium = `Medium: Python, video`
const duration = `Duration: 0:05 `
const description =  `
Description: In computer science there are object detection neural nets that can detect where an object is in a picture. This output is called a “segmentation mask” which can be used to cut out objects from a given frame in a video. I wanted to find an object to cut out from a video and then paste back in some time later. I decided to try this method out on tennis because the contact point with the ball is important to the video. I took some footage of slo mo tennis forehands from the internet and ran a pre-trained object detection net called YOLOv5 on it to cut out the tennis balls as the players hit it. Here’s the results of that initial experiment. I think it is funny to watch players angrily hit the ball and miss. This initial result is pretty rough due to some technical limitations on the quality of object detection models I was able to find out of the box and the poor quality of quick infill algorithms. My goal is to spend some time getting this polished. I want to train my own infill model with a RNN to make sure that the output is suitable for continuous video. Also, I want to train the object detection NN to work on tennis balls specifically and with higher confidence. This should make the output less rough. I also think I could find specific videos that allow me to push the concept a little further. I received feedback from reviewers that I could apply this to a whole tennis match where the players leave the court and the volley just keeps going like a ghost. 
`



const TennisMisses = () => {
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media = {media} item1 = {medium} item2 = {duration} description ={description}/>
    </div>
  )
}

export default TennisMisses