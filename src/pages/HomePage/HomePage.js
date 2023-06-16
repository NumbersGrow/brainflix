import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import videoDataJSON from "../../data/video-details.json";
import VideoFrame from "../../components/VideoFrame/VideoFrame";
import MainVideos from "../../components/MainVideos/MainVideos";
import Poster from "../../components/Poster/Poster";
import "./HomePage.scss";


function HomePage() {

    const apiKey = "32314ce0-9b74-4821-ac13-72709edcbe7c";

    const [videosData, setVideosData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
  
    const params = useParams();

    // const [videosData] = useState(videoDataJSON);
    // const [selectedVideo, setSelectedVideo] = useState(
    //     videoDataJSON[0]
    // );
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
        console.log(params.id);
    
        if (params.id) {
          axios
            .get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`)
            .then((response) => {
              console.log(response);
              setSelectedVideo(response.data);
            })
            .catch((err) => console.error(err));
        } 
        // else {
        //   axios
        //     .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        //     .then((response) => {
        //       console.log(response);
        //       setSelectedVideo(response.data);
        //     })
        //     .catch((err) => console.error(err));
        // }
      }, [params.id]);

    // const handleSelectedVideo = async (id) => {
    //     try {
    //         const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`);
    //     videosData.find((video) => {
    //         if (id === video.id) {
    //             setSelectedVideo(video);
    //             }});
    //         } catch (err) {
    //             console.error(err);
    //                         }
            

    return (
        <div >
            <Poster selectedVideo={selectedVideo} />
            <div className="desktop-wrapper"> {/* div for better structure for desktop view */}
                <VideoFrame selectedVideo={selectedVideo} />
                <MainVideos
                    videosData={videosData}
                    selectedVideo={selectedVideo}
                    // handleSelectedVideo={handleSelectedVideo}
                />
            </div>
        </div>
    );
}

export default HomePage;