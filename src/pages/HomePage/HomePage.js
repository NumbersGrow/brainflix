import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoFrame from "../../components/VideoFrame/VideoFrame";
import MainVideos from "../../components/MainVideos/MainVideos";
import Poster from "../../components/Poster/Poster";
import "./HomePage.scss";

function HomePage() {
  const { videoId } = useParams();
  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5050/videos/")
      .then((response) => {
        setVideosData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(`http://localhost:5050/videos/${videoId}`)
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((err) => console.error(err));
    } else {
      if (videosData.length === 0) return;

      axios
        .get(
          `http://localhost:5050/videos/${videosData[0].id}` //return the first video if selected video is not existing
        )
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, [videoId, videosData]);

  // if selected video is empty

  if (Object.keys(selectedVideo).length === 0)
    return (
      <div className="desktop-box">
        <h1>Loading.....</h1>
      </div>
    );

  return (
    <div>
      <Poster selectedVideo={selectedVideo} />
      <div className="desktop-wrapper">
        {" "}
        {/* div for better structure for desktop view */}
        <VideoFrame selectedVideo={selectedVideo} />
        <MainVideos videosData={videosData} selectedVideo={selectedVideo} />
      </div>
    </div>
  );
}

export default HomePage;
