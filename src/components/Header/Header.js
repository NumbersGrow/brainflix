import "./Header.scss";

import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import uploadImg from "../../assets/images/upload.svg";
import logo from "../../assets/images/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import Search from "../../assets/images/search.svg";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Brainflix-Logo"></img>
            </div>
            <div className="header__search">
                <div className="header__search-box">
                    <InputBox img={Search} placeholder="Search" />
                    <Avatar />
                </div>
                <Button className="button" img={uploadImg} text="upload" />
            </div>
        </header>
    );
}

export default Header;