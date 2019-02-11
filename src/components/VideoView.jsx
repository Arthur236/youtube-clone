import React from "react";
import { isEmpty } from 'lodash';
import { Row, Col, Spin } from 'antd';

import Nav from './NavWrapper';
import Video from './Video';
import Playlist from '../containers/Playlist';

class VideoView extends React.Component {
  componentDidMount() {
    const { match, categoryId, categoryVideos, fetchCategoryVideos } = this.props;
    const { categoryName, videoId } = match.params;

    this.props.fetchVideo(videoId);

    if (categoryVideos[`${categoryName}_videos`] === undefined) {
      fetchCategoryVideos(categoryId, categoryName, 20);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
  }

  render() {
    const { match, categoryVideos, video } = this.props;
    const { categoryName, videoId } = match.params;

    const videosAvailable = (!isEmpty(categoryVideos) && categoryVideos[`${categoryName}_videos`]);
    const videoAvailable = !isEmpty(video);

    return (
      <Nav>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            {
              videoAvailable ?
                <Video
                  videoId={videoId}
                  video={video}
                  channelId={video.items[0].snippet.channelId}
                /> :
                <Spin size="large"/>
            }
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            {
              videosAvailable ?
                <Playlist
                  categoryName={categoryName}
                  videos={categoryVideos[`${categoryName}_videos`]}
                /> :
                <Spin size="large"/>
            }
          </Col>
        </Row>
      </Nav>
    );
  }
}

export default VideoView;
