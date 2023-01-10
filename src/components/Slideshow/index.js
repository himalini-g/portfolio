import './index.scss'
import '../../App.scss'
import { useEffect, useState } from 'react'

const Slideshow = ({media}) =>{
  
    const [index, setIndex] = useState(0);
    const [renderDescription, setRenderDescription] = useState(false);

    const moreThanOne = media.slideshow.length > 1;
    useEffect(() => {
        setIndex(0);
        setRenderDescription(0 > media.slideshow_descriptions.length);
    }, [media.slideshow_descriptions])
    const next = () => {
        if(index === media.slideshow.length - 1){
            setIndex(0);
            setRenderDescription(index > media.slideshow_descriptions.length);
        } else {
            setIndex(index + 1);
            setRenderDescription(index > media.slideshow_descriptions.length);
        }
    }
    const prev = () => {
        if(index === 0){
            setIndex(media.slideshow.length - 1);
            setRenderDescription(index > media.slideshow_descriptions.length);
        } else {
            setIndex(index - 1);
            setRenderDescription(index > media.slideshow_descriptions.length);
        }
    }
    let button;
     
    if (moreThanOne) {
        button  = 
        <div className='slideshow-actions'>
            <button className="slideshow-button" onClick={prev}>&lt;</button>
            <button className="slideshow-button" onClick={next}>&gt;</button>
        </div>;
    }
    else {
        button = <></>
    }
    return (
            <div className='slideshow'>
                    {media.slideshow[index]}
                    {button}
                <div className='slideshow-description'>
                     {renderDescription ? media.slideshow_descriptions[index] : null}
                </div>
            </div>
    )
}

export default Slideshow;