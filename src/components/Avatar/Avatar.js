import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./_avatar.scss";

const Avatar = () => {
    return (
        <div className="avatar">
            <img className="avatar" src={avatar} alt="avatar"></img>
        </div>
    );
}

export default Avatar