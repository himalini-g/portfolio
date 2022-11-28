import './index.scss'
import '../../App.scss'
import { useEffect, useState } from 'react'

const Slideshow = ({media}) =>{
    console.log(media)
    const [index, setIndex] = useState(0);


    useEffect(() => {
        setIndex(0);
    }, [])
    const next = () => {
        if(index === media.slideshow.length - 1){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const prev = () => {
        if(index === 0){
            setIndex(media.slideshow.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    return (
            <div className='slideshow'>
                <img className='slideshow-image' src={media.slideshow[index]}/>
                    <div className='slideshow-actions'>
                        <button className="slideshow-button" onClick={prev}>&lt;</button>
                        <button className="slideshow-button" onClick={next}>&gt;</button>
                    </div>
                <div className='slideshow-description'>
                    {media.slideshow_descriptions[index]}
                </div>
            </div>
    )
}

export default Slideshow;