import "./InputBox.scss";

const InputBox = ({placeholder}) => {
    return (
        <input
            className="input"
            placeholder={placeholder} />
    );
}

export default InputBox