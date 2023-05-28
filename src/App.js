import { useState } from "react";
import videoDataJSON from "./data/video-details.json";

import "./App.scss";

import Header from "./components/Header/Header";
import VideoFrame from "./components/VideoFrame/VideoFrame";
import MainVideos from "./components/MainVideos/MainVideos";
import Poster from "./components/Poster/Poster";



function App() { {/* state for selected video */}
  const [videosData] = useState(videoDataJSON);
  const [selectedVideo, setSelectedVideo] = useState(
    videoDataJSON[0]
  );

  const handleSelectedVideo = (id) => { 
    videosData.forEach((video) => {
      if (id === video.id) {
        setSelectedVideo(video);
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <Poster selectedVideo={selectedVideo} />
      <div className="desktop-wrapper"> {/* div for better structure for desktop view */}
        <VideoFrame selectedVideo={selectedVideo} />
        <MainVideos
          videosData={videosData}
          selectedVideo={selectedVideo}
          handleSelectedVideo={handleSelectedVideo}
        />
      </div>
    </div>
  );
}

export default App;