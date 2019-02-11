import React from 'react';

import '../css/Video.scss';
import VideoDetails from "../containers/VideoDetails";

const Video = (props) => {
  const { channelId, video, videoId } = props;

  return (
    <div>
      <div className="custom-video-wrapper">
        <iframe
          title="video"
          className="custom-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <VideoDetails channelId={channelId} video={video} />
    </div>
  );
};

export default Video;
