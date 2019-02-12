import React from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { List } from 'antd';

import '../css/Playlist.scss';
import numberFormat from "../utils/numberFormat";

class Playlist extends React.Component {
  render() {
    const { videos } = this.props;

    let dataArray = [];

    if (!isEmpty(videos)) {
      videos.items.map((video) => {
        const newObject = {
          videoId: video.id,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
          channelTitle: video.snippet.channelTitle,
          viewCount: video.statistics.viewCount,
        };

        return dataArray.push(newObject);
      });
    }

    return (
      <React.Fragment>
        <h4>More Videos</h4>

        <List
          className="custom-list"
          itemLayout="horizontal"
          dataSource={dataArray}
          xs={24} sm={24} md={24} lg={8} xl={8}
          renderItem={item => (
            <Link to={`/videos/${item.videoId}`} key={item.videoId}>
              <List.Item>
                <List.Item.Meta
                  avatar={<img src={item.thumbnail} className="list-thumbnail" alt="thumbnail"/>}
                  title={item.title}
                  description={
                    <span>
                      {item.channelTitle}
                      <p>{numberFormat(item.viewCount)} views</p>
                    </span>
                  }
                />
              </List.Item>
            </Link>
          )}
        />
      </React.Fragment>
    );
  }
}

export default Playlist;
