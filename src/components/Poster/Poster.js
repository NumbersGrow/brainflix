import './Poster.scss'

const Poster = (props) => {
  if (props.selectedVideo === null) // to prevent the bug with undefined length of video ids
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
        poster={props.selectedVideo.image}
      ></video>
    </div>
  )
}

export default Poster