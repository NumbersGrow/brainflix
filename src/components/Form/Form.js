import "./Form.scss";

import Button from "../Button/Button";
import commentImg from "../../assets/images/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Form() {
    return (
        <>
            <h2>join conversation</h2>
            <form className="card-form">
                <div className="card-form__avatar-box">
                    <img className="card-form__avatar"
                        src={avatar}
                        alt="avatar" />
                </div>
                <div className="card-form__content-wrapper">
                    <textarea
                        className="card-form__input"
                        placeholder="Add a new comment"
                        name="comment"
                        id="comment" />
                    <Button className="button button-comment" img={commentImg} text="comment" />
                </div>
            </form>
        </>
    )
}

export default Form