import React,{useState} from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import image from "./images/download (1).png";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
// import Link


const Header = () => {

const [inputSearch, setInputSeach] = useState('')

  return (
    <div className="header">
      <div className="top__left">
        <MenuIcon />
        <Link to='/'>
        <img src={image} className="header__logo" alt="logo " />
        
        </Link>
      </div>
      <div className="middle">
        <input value={inputSearch} onChange={(e)=> setInputSeach(e.target.value) } placeholder="Search" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputbutton" />
        </Link>
      </div>
      <div className="top__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AccountCircleIcon className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
