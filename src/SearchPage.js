import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import nft1 from "./images/nft1.webp";
import nft2 from "./images/nft2.jpg";
import nft3 from "./images/nft3.webp";
import nft4 from "./images/nft4.webp";
import nft5 from "./images/nft5.png";
import nft6 from "./images/nft6.webp";
import VideoRow from "./VideoRow";
import { TuneOutlined } from "@mui/icons-material";

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__filter ">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={nft1}
        channel="King of NFT"
        verified
        subs="693K"
        noOfVideos={349}
        description="You can find awesome programming lessens here! Also, expect programming tips and tricks that will take you to next leve"
      />
      <hr/>
      <VideoRow image={nft2}

      views='1.7m'
      subs='678k'
      description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
      timestamp='59 seconds ago'
      channel='King of NFTs'
      title='Future of NFTs'/>
<hr/>
<VideoRow image={nft3}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
<VideoRow image={nft4}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
<VideoRow image={nft5}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
<VideoRow image={nft6}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
<VideoRow image={nft2}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
<VideoRow image={nft2}

views='1.7m'
subs='678k'
description='This video will teach you from Zero to Mastery all what you need to know about NFTs '
timestamp='59 seconds ago'
channel='King of NFTs'
title='Future of NFTs'/>
<hr/>
    </div>
  );
};

export default SearchPage;
