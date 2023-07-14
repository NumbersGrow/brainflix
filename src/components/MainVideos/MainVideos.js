import "./MainVideos.scss";

import { Link } from "react-router-dom";

function MainVideos({ videosData, selectedVideo }) {
  return (
    <div className="videos-wrapper">
      <h4>next videos</h4>

      {videosData /* filter for showing the list of videos without selected video */
        .filter((video) => selectedVideo.id !== video.id)
        .map((video) => (
          <Link className="link" key={video.id} to={`/videos/${video.id}`}>
            <div className="video-card">
              <div>
                <img
                  className="video-card__image"
                  src={video.image}
                  alt={video.title}
                />
              </div>
              <div className="video-card__content">
                <p className="video-card__title">{video.title}</p>
                <p>{video.channel}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default MainVideos;
