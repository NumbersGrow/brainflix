import "./Header.scss";

import {Link} from "react-router-dom";


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
                <Link to="/home">
                <img className="logo" src={logo} alt="Brainflix-Logo"></img>
                </Link>
            </div>
            <div className="header__search">
                <div className="header__search-box">
                    <InputBox img={Search} placeholder="Search" />
                    <Avatar />
                </div>
                {/* <Link to="upload"> */}
                <Button  className="button" img={uploadImg} text="upload" />
                {/* </Link> */}
            </div>
        </header>
    );
}

export default Header;