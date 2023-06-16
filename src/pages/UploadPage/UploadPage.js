import "./UploadPage.scss";
import Button from "../../components/Button/Button";

import uploadHeroImg from "../../assets/images/Upload-video-preview.jpg";
import publishImg from "../../assets/images/publish.svg";

import { useNavigate } from 'react-router-dom';

function UploadPage() {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for uploading');
        navigate('/');
    };

    return (
        <div className="upload-wrapper">
            <h1>Upload Video</h1>
            <h4>video thumbnail</h4>
            <div className="image-wrapper">
                <img className="upload-image" src={uploadHeroImg} alt="upload hero" />
            </div>
            <form className="upload-form" onSubmit={handleFormSubmit}>
                <p><label className="label" htmlFor="title">title your video</label></p>
                <textarea
                    className="card-form__input"
                    id="title"
                    name="title"
                    placeholder="Add a title for your video" />
                <p><label className="label" htmlFor="description">add a video description</label></p>
                <textarea
                    className="card-form__input"
                    id="description"
                    name="description"
                    placeholder="Add a description to your video" />
                <Button className="button" img={publishImg} text="publish" />
            </form>
            <a className="cancel" href="/">cancel</a>
        </div>
    );
}

export default UploadPage;
