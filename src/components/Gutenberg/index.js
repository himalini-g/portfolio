import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

const p5 = [<iframe className='p5-iframe' src="https://editor.p5js.org/miniverse/full/uhuv5GAOY"></iframe>];
const media = {
  slideshow: [p5],
  slideshow_descriptions: [],
}

const header = `Gutenberg Clock`
const medium = `Medium: P5.js and Python`
const duration = `Duration: indefinite`
const description = `
Description: This clock tells time with text scraped from out of copyright 
books in the Gutenberg Project. My goal was to create a 
novel clock. I wanted to evoke the viewer's curiosity when they check the time and inevitably read the phrases associated with it.
`


const Gutenberg = (canvas) => {
  return (
    <div>
      <div className='header-slideshow'>
        {header}
      </div>
      <SlideShowDescription media = {media} item1 = {medium} item2= {duration} description ={description}/>
    </div>
    
  )
}

export default Gutenberg;