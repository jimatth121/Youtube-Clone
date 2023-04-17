import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";





const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title='Librabry'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={OndemandVideoIcon} title='Your Videos'/>
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later'/>
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked Video'/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show more'/>
      <hr/>
    </div>
  );
};

export default Sidebar;
