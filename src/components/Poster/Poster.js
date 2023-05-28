import "./Poster.scss";

const Poster = (props) => {
    return (
        <div className="video-wrapper">
            <video className="video-main" controls poster={props.selectedVideo.image}></video>
        </div>
    );
}

export default Poster