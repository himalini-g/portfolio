import './index.scss'
import '../../App.scss'
import { useEffect, useState } from 'react'




const FullScreenSlideshow = ({media}) =>{
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
            <div>
                <img src={media.slideshow[index]}/>
            </div>
    )
}

export default FullScreenSlideshow;
