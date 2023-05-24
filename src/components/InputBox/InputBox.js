import "./_inputBox.scss";

const InputBox = (props) => {
    return (
        <input className="input" placeholder={props.placeholder}/>
    );
}

export default InputBox