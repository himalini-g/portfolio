import './index.scss'
import FullScreenSlideshow from '../FullScreenSlideshow'
import blob1 from '../../public/images/blobs/slideshow_1.gif'
import blob2 from '../../public/images/blobs/slideshow_2.gif'
import blob3 from '../../public/images/blobs/slideshow_3.gif'

const home_media = {
    slideshow: [blob1, blob2, blob3],
    slideshow_descriptions: 
        ['this is really cool and 1',
        'this is really cool and 2',
        'this is really cool and 3'],
}
const Home = () => {
    return (
        <div>
            <FullScreenSlideshow media={home_media}/>
        </div>
    )
}
export default Home;