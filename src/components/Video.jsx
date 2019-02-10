import React from 'react';
import { Avatar, List } from "antd";

import '../css/Video.scss';

const Video = (props) => {
  const { video, videoId } = props;

  const data = [
    {
      title: video.items[0].snippet.title,
    }
  ];

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

      <div className="video-details">
        <h2>{video.items[0].snippet.title}</h2>
        <h4>{video.items[0].statistics.viewCount} views</h4>

        <br/>
        <hr/>

        <List
          itemLayout="horizontal"
          dataSource={data}
          xs={24} sm={24} md={24} lg={8} xl={8}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.thumbnail} className="list-thumbnail" alt="thumbnail"/>}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Video;
