import "./_button.scss";

const Button = (props) => {
    return (
        <button className="button">
            <img src={props.img}/>
            {props.text}
        </button>
    );
}

export default Button