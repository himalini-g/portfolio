import './index.scss'
import '../../App.scss'
import { useEffect, useState } from 'react'




const FullScreenSlideshow = ({media}) =>{
    const [index, setIndex] = useState(0);
    const tick=() =>{
        setIndex((index) => index < media.slideshow.length -1 ? index +1 : 0);
    }

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });

    return (
        <div className="bg">
            <img src={media.slideshow[index]}/>
        </div>
    )
}

export default FullScreenSlideshow;
