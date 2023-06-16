import "./Button.scss";
import { useNavigate } from 'react-router-dom';

const Button = (props) => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/upload');
    };

    return (
        <button className={props.className} onClick={handleClickButton}>
            <img
                className="button-svg"
                src={props.img} />
            {props.text}
        </button>
    );
}

export default Button