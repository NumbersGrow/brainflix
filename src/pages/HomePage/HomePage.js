import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoFrame from "../../components/VideoFrame/VideoFrame";
import MainVideos from "../../components/MainVideos/MainVideos";
import Poster from "../../components/Poster/Poster";
import "./HomePage.scss";

function HomePage() {
  const { videoId } = useParams();

  const apiKey = "32314ce0-9b74-4821-ac13-72709edcbe7c"; //api key for api

  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then((response) => {
        console.log(response);
        setVideosData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
        )
        .then((response) => {
          console.log(response);
          setSelectedVideo(response.data);
        })
        .catch((err) => console.error(err));
    } else {
      if (videosData.length === 0) return;

      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videosData[0].id}?api_key=${apiKey}` //return the first video if selected video is not existing
        )
        .then((response) => {
          console.log(response);
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
