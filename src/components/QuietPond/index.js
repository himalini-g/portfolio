import './index.scss'
import '../../App.scss'

const Video = () => {
  return (
    <div className="youtube-container">
      <iframe classaName='youtube-iframe' width="560" height="315" src="https://www.youtube.com/embed/ApSSeLzOVnw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  )
}

export default Video;