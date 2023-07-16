import "./Button.scss";

const Button = ({className, onClick, img, text}) => {
  return (
    <button className={className} onClick={onClick}>
      <img className="button-svg" src={img} />
      {text}
    </button>
  );
};

export default Button;
