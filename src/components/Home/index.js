import './index.scss'
import FullScreenSlideshow from '../FullScreenSlideshow'
import truchet1 from '../../public/images/truchet/truchet_1.jpg'
import blob1 from '../../public/images/blobs/slideshow_1.gif'
import blob2 from '../../public/images/blobs/slideshow_2.gif'
import blob3 from '../../public/images/blobs/slideshow_3.gif'

import bhoomi from '../../public/images/kollywood/Bhoomi.jpg'
import calls from '../../public/images/kollywood/Calls.jpg'
import chakra from '../../public/images/kollywood/Chakra.jpg'
import chennayil from '../../public/images/kollywood/Chennayil_Oda_Oda.jpg'
import chidambaram from '../../public/images/kollywood/Chidambaram_Railway_Gate.jpg'
import eeswaran from '../../public/images/kollywood/Eeswaran.jpg'

const home_media = {
    slideshow: [truchet1, blob1, blob2, blob3,
        bhoomi, calls, chakra, 
        chennayil, chidambaram, eeswaran],
}
const Home = () => {
    return (
        <div>
            <FullScreenSlideshow media={home_media}/>
        </div>
    )
}
export default Home;