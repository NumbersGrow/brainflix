import './Poster.scss'

const Poster = ({selectedVideo}) => {
  if (selectedVideo === null) // to prevent the bug with undefined length of video ids
    return (
      <div className='desktop-box'>
        <h1>Video not found</h1>
      </div>
    )
  return (
    <div className='video-wrapper'>
      <video
        className='video-main'
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  )
}

export default Poster