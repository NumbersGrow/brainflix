import "./VideoFrame.scss";
import dateFormat from "dateformat"; /* date format plugin */

import viewsImg from "../../assets/images/views.svg";
import likesImg from "../../assets/images/likes.svg";

import Form from "../Form/Form";

const VideoFrame = ({selectedVideo}) => {
  return (
    <div>
      {selectedVideo && ( //checking if video exists
        <div className="desktop-box">
          {" "}
          <h1 className="title">{selectedVideo.title}</h1>
          <div className="description-top">
            <div className="description-top__wrapper-left">
              <p className="description-top__name">
                By {selectedVideo.channel}
              </p>
              <p className="description-top__date">
                {dateFormat(selectedVideo.timestamp, "paddedShortDate")}
              </p>
            </div>
            <div className="description-top__wrapper-right">
              <p className="description-top__views">
                <img className="svg" src={viewsImg} alt="views" />
                <span className="description-top__views--number">
                  {selectedVideo.views}
                </span>
              </p>
              <p>
                <img className="svg" src={likesImg} alt="likes" />
                <span className="description-top__likes">
                  {selectedVideo.likes}
                </span>
              </p>
            </div>
          </div>
          <p className="description-text">{selectedVideo.description}</p>{" "}
          <p className="comments-count">
            {selectedVideo.comments.length} Comments
          </p>
          <div className="comment-wrapper">
            <Form />
            {selectedVideo.comments && ( // checking if comments exist
              <div className="comment-list">
                {selectedVideo.comments.map((comment) => (
                  <div className="comment-list__card" key={comment.id}>
                    <div className="comment-list__avatar-wrapper">
                      <div className="comment-list__avatar-blank"></div>
                    </div>
                    <div className="comment-list__content-wrapper">
                      <div className="comment-list__content-top">
                        <p className="comment-list__name">{comment.name}</p>
                        <p className="comment-list__date">
                          {dateFormat(comment.timestamp, "paddedShortDate")}
                        </p>
                      </div>
                      <div className="comment-list__content-text">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFrame;
