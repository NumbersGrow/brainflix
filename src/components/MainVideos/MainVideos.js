import "./MainVideos.scss";

function MainVideos(props) {
    return (
        <div className="videos-wrapper">
            <h4>next videos</h4>

            {props.videosData /* filter for showing the list of videos without selected video */
                .filter((video) => props.selectedVideo.id !== video.id)
                .map((video) => (
                    <div
                        key={video.id}
                        className="video-card"
                        onClick={() => props.handleSelectedVideo(video.id)} /* selecting the video by clicking on the list of videos*/
                    >
                        <div>
                            <img className="video-card__image" src={video.image} alt={video.title} />
                        </div>
                        <div className="video-card__content">
                            <p className="video-card__title">{video.title}</p>
                            <p>{video.channel}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default MainVideos;