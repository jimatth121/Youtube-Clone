import React from 'react'
import './Recommendation.css'
import VideoCard from './VideoCard'
import image1 from './images/download.jfif'
import image2 from './images/images (2).jfif'
import image3 from './images/images (3).jfif'
import image4 from './images/images (4).jfif'
import image5 from './images/images (5).jfif'
import image6 from './images/images (6).jfif'
import image7 from './images/images (7).jfif'
import image8 from './images/images.jfif'
import image9 from './images/ukraine.jfif'
import image10 from './images/download2.png'











const Recommendation = () => {
  return (
    <div className='recommended'>
      <h1>Recommeded</h1>
      <div className='recommended__videos'>
      <VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image2}
      channelImage={image2}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image1}
      channelImage={image1}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image3}
      channelImage={image3}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image4}
      channelImage={image4}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image5}
      channelImage={image5}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image6}
      channelImage={image6}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image7}
      channelImage={image7}
      />

<VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image8}
      channelImage={image8}
      />
      <VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image9}
      channelImage={image9}
      />
      <VideoCard 
      title='Become a Web Developer in 10 minutes | 2019/2020'
      views='2.3M'
      timestamp = '3 days ago'
      channel='Sonny Sangha'
      image={image10}
      channelImage={image10}
      />
     




      </div>
    </div>
  )
}

export default Recommendation
