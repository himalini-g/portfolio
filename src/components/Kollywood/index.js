import './index.scss'
import '../../App.scss'
import SlideShowDescription from '../SlideShowDescription'

import bhoomi from '../../public/images/kollywood/Bhoomi.jpg'
import calls from '../../public/images/kollywood/Calls.jpg'
import chakra from '../../public/images/kollywood/Chakra.jpg'
import chennayil from '../../public/images/kollywood/Chennayil_Oda_Oda.jpg'
import chidambaram from '../../public/images/kollywood/Chidambaram_Railway_Gate.jpg'
import eeswaran from '../../public/images/kollywood/Eeswaran.jpg'
import kabadadaari from '../../public/images/kollywood/Kabadadaari.jpg'
import kamali from '../../public/images/kollywood/Kamali_From_Nadukkaveri.jpg'
import kasa from '../../public/images/kollywood/kasa_kasa.jpg'
import master from '../../public/images/kollywood/Master.jpg'
import mirugaa from '../../public/images/kollywood/Mirugaa.jpg'
import naanum from '../../public/images/kollywood/Naanum_Single_Thaan.jpg'
import parris from '../../public/images/kollywood/Parris_Jeyaraj.jpg'
import pazhagiya from '../../public/images/kollywood/Pazhagiya_Naatkal.jpg'
import thallumaala from '../../public/images/kollywood/Thallumaala.jpg'
import trip from '../../public/images/kollywood/Trip.jpg'
import v from '../../public/images/kollywood/V.jpg'

const media = {
  slideshow: 
    [bhoomi, calls, chakra, 
    chennayil, chidambaram, eeswaran, 
    kabadadaari, kamali, kasa,
    master, mirugaa, naanum,
    parris, pazhagiya, thallumaala,
    trip, v],

  slideshow_descriptions: 
    ['bhoomi','calls', 'chakra',
     'chennayil', 'chidambaram', 'eeswaran',
     'kabadadaari', 'kamali', 'kasa', 
     'master', 'mirugaa', 'naanum',
     'parris', 'pazhagiya', 'thallumaala',
     'trip', 'v'],
}
const description =  `Proposal
I’m Tamil. India has a huge problem with colorism which disproportionately impacts women. As a result, I’ve seen many ridiculous Tamil movies where the female lead is the same skintone as a Northern European while the male lead looks like someone who is actually from a region with 90 degree weather.

Machine
I wanted to craft a machine to show this trend clearly. I wanted a typology of actors and actresses and their skintones. To do that, I first needed to construct a machine to somehow extract skin tone from film.

Method
This was broken down into multiple smaller steps:

track down a bunch of tamil movies
pirate them

downsample footage by extracting frames with ffmpeg
use python to extract faces from each frame
use face-recognition module to crop faces out automatically with a CNN and then extract a 128 dimensional embedding vector
use UMAP to group the faces into people based on their embedding vector
extract skin tone from each face and average across each person grouping
construct a data visualization to go through the people from lightest to darkest average skintone
Result
I failed at step 5 and 6. It ended up being more complicated than I anticipated to reconstruct the average skin tone of people and then construct a compelling interactive out of it. As a result, I have a sort of intermediate result instead. In the google drive below is essentially a collection of per movie images. Each image is the clustered faces of the people in that film organized by a reduced version of their embedding vector. The distance and location between faces in this representation is not directly related to skintone, rather it is what the computer decides best represents faces in 2d. That could be skin tone in some ways but it’s less obvious than that.

Result
reflecting on the end result: Though the intermediate product lacks the conceptual backing of my original proposal, in its own right I think it’s a series of compelling images. I do find it pleasurable to sit and scroll across the images and observe some of the dumb faces actors and actresses make.

 

I’ve linked downloadable images here but I’ve also inserted them into the post. For optimal viewing experience I highly recommend downloading the images and opening them up so you can zoom in and scroll around.  https://drive.google.com/drive/folders/16FyGw2GLY4Svj_8U7fXJdTEZF_yQlH86?usp=sharing

 

Updated Result:
10/3: I’m updating this post as I get better visualizations of skintone. So I’ve included one mega image of all the people across multiple films organized by their average skin tone.  Below that are the intermediate results of per movie images. In the Mega image I do see all the darker faces at the top are primarily the male lead while at the bottom they are primarily the female lead.

10/4: I’ve added “Better Mega Image” so please ignore “Mega Image”. I also included a video below that showing me scrolling top to bottom zoomed into the grid. I think it demonstrates some of the trends in gender and skin tone I wanted to show. I highly recommend watching the scrolling video to understand that I want the viewer to zoom in and traverse the landscape of the grid.
`

const Kollywood = () => {
  return (
    <SlideShowDescription media={media} description={description}/>
    )
}

export default Kollywood