import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

const p5 = [<iframe className='p5-iframe' src="https://editor.p5js.org/miniverse/full/uhuv5GAOY"></iframe>];
const media = {
  slideshow: [p5],
  slideshow_descriptions: [],
}

const header = 'Gutenberg Clock' 
const medium = 'Medium: P5.js and Python'
const description = `
Description: This clock tells time with text. My goal with this project was to create a kind of clock the viewer has not seen previously. I also wanted there to be some joy and familiarity when checking the time and seeing the phrases associated with it.`

const Gutenberg = (canvas) => {
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media = {media} item1 = {medium} description ={description}/>
    </div>
    
  )
}

export default Gutenberg;