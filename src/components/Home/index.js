import './index.scss'
import FullScreenSlideshow from '../FullScreenSlideshow'
import truchet1 from '../../public/images/truchet/truchet_1.jpg'
import blob1 from '../../public/images/blobs/slideshow_1.gif'
import blob2 from '../../public/images/blobs/slideshow_2.gif'
import frog from '../../public/images/quiet_pond/pond_8.png'

import mega from '../../public/images/kollywood/mega_image_75_resized.jpg'

const home_media = {
    slideshow: [truchet1, blob1, blob2, frog,
        mega],
}
const Home = () => {
    return (
        <div>
            <FullScreenSlideshow media={home_media}/>
        </div>
    )
}
export default Home;