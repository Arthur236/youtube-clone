import React from "react";
import { isEmpty } from 'lodash';
import { Avatar, Col, Icon, Row, Spin } from 'antd';

import formatDate from '../utils/formatDate';
import formatNumber from '../utils/numberFormat';

import '../css/VideoDetails.scss';

class VideoView extends React.Component {
  componentDidMount() {
    const { channelId, fetchChannel } = this.props;

    fetchChannel(channelId);
  }

  render() {
    console.log(this.props);

    const { channel, video } = this.props;
    const channelAvailable = !isEmpty(channel.channel);

    return (
      <div className="video-details">
        <h2>{video.items[0].snippet.title}</h2>

        <div className="video-stats">
          <div className="video-views">
            <h4>{video.items[0].statistics.viewCount} views</h4>
          </div>

          <div className="video-likes">
            <span style={{ marginRight: 8 }}>
              <Icon type="like-o" style={{ marginRight: 8 }}/>
              {formatNumber(video.items[0].statistics.likeCount)}
            </span>

            <span style={{ marginRight: 8 }}>
              <Icon type="dislike-o" style={{ marginRight: 8 }}/>
              {formatNumber(video.items[0].statistics.dislikeCount)}
            </span>

            <span>
              <Icon type="star-o" style={{ marginRight: 8 }}/>
              {formatNumber(video.items[0].statistics.favoriteCount)}
            </span>
          </div>
        </div>

        <hr/>

        <Row gutter={16}>
          <Col span={2}>
            {
              channelAvailable ?
                <Avatar src={channel.channel.items[0].snippet.thumbnails.medium.url}
                        alt="thumbnail"/> :
                <Spin size="small"/>
            }
          </Col>

          <Col span={20}>
            <h4>{video.items[0].snippet.channelTitle}</h4>
            <p>Published on {formatDate(video.items[0].snippet.publishedAt)}</p>
            <p>{video.items[0].snippet.description}</p>
          </Col>
        </Row>

        <hr/>

        <h4>{video.items[0].statistics.commentCount} Comments</h4>
      </div>
    );
  }
}

export default VideoView;
