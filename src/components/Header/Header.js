import "./_header.scss";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import uploadImg from "../../assets/images/upload.svg";
import logo from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Brainflix-Logo"></img>
            </div>
            <div className="header__search">
                <div className="header__search-box">
                    <InputBox placeholder="Search"/>
                    <Avatar/>
                </div>
                <Button img={uploadImg} text="upload"/>
            </div>
        </header>
    );
}

export default Header;