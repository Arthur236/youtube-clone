import React from 'react';

import '../css/Video.scss';

const Video = (props) => {
  return (
    <div className="custom-video-wrapper">
      <iframe
        title="video"
        className="custom-video"
        src="https://www.youtube.com/embed/dTzfMxj-q3k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Video;
