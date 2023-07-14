import "./UploadPage.scss";
import Button from "../../components/Button/Button";

import uploadHeroImg from "../../assets/images/Upload-video-preview.jpg";
import publishImg from "../../assets/images/publish.svg";

import { useNavigate, } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function UploadPage() {
  const [videos, setVideos] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  // const history = useHistory();

  const navigate = useNavigate(); // navigation to Home Page after submission the form by pressing "Publish" button

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newVideo = {
      // id: id,
      title: postTitle,
      description: postDescription,
    };
try {
    const response = await axios.post("http://localhost:5050/videos/", newVideo);
    const allVideos = [...videos, response.data];
    setVideos(allVideos);
    setPostTitle("");
    setPostDescription("");
    videos.push("/");
    alert("Thank you for publishing your video!");
    navigate("/");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  };
  

  return (
    <div className="upload-wrapper">
      <h1 className="upload-title">Upload Video</h1>
      <div className="upload-wrapper__video">
        <div className="upload-wrapper__desktop-left">
          <h4 className="upload-subtitle">video thumbnail</h4>
          <div className="image-wrapper">
            <img
              className="upload-image"
              src={uploadHeroImg}
              alt="upload hero"
            />
          </div>
        </div>
        <form className="upload-form" onSubmit={handleFormSubmit}>
          <p>
            <label className="label" htmlFor="title">
              title your video
            </label>
          </p>
          <textarea
            className="card-form__input"
            id="title"
            name="title"
            placeholder="Add a title for your video"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <p>
            <label className="label" htmlFor="description">
              add a video description
            </label>
          </p>
          <textarea
            className="card-form__input description"
            id="description"
            name="description"
            placeholder="Add a description to your video"
            required
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />

          <div className="button-wrapper">
            <Button
              className="button button-publish"
              img={publishImg}
              text="publish"
            />
            <a className="cancel" href="/">
              cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
