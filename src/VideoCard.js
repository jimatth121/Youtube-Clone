import React from 'react'
import { Avatar } from '@mui/material'
import './VideoCard.css'

const VideoCard = ({image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className='videocard'>
      <img className='videocard__thumbnail' src={image} alt=''/>
      <div className='videocard__info'> 
      <Avatar
      className='vediocard__avatar'
      alt=''
      src={channelImage}/>
      <div className='videocard__text'>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views}. {timestamp}
        </p>
      </div>
      </div>
    </div>
  )
}

export default VideoCard
