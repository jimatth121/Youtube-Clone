import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const ChannelRow = ({
  image,
  channel,
  subs,
  noOfvideos,
  verified,
  description,
}) => {
  return (
    <div className="channelrow">
      <Avatar src={image} alt={channel} className="channelrow__logo" />
      <div className="channelrow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>{subs} subscribersdot • {noOfvideos} videos </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
