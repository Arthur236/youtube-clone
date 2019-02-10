import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

import '../css/Playlist.scss';

const Playlist = (props) => {
  const { videos } = props;

  let dataArray = [];

  videos.map((video) => {
    const newObject = {
      playlistId: video.snippet.playlistId,
      videoId: video.snippet.resourceId.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
    };

    return dataArray.push(newObject);
  });

  return (
    <List
      className="custom-list"
      itemLayout="horizontal"
      dataSource={dataArray}
      xs={24} sm={24} md={24} lg={8} xl={8}
      renderItem={item => (
        <Link to={`/playlists/${item.playlistId}/videos/${item.videoId}`} key={item.videoId}>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={item.thumbnail} className="list-thumbnail" alt="thumbnail"/>}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        </Link>
      )}
    />
  );
};

export default Playlist;
