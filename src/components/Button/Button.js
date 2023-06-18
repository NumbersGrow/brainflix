import "./Button.scss";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <img className="button-svg" src={props.img} />
      {props.text}
    </button>
  );
};

export default Button;
