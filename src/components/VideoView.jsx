import React from "react";
import { isEmpty } from 'lodash';
import { Row, Col, Spin } from 'antd';

import Nav from './NavWrapper';
import Video from './Video';
import Playlist from '../containers/Playlist';

class VideoView extends React.Component {
  componentDidMount() {
    const { match, categoryVideos, fetchCategoryVideos, video } = this.props;
    const { videoId } = match.params;

    this.props.fetchVideo(videoId).then(() => {
      const { categoryId } = this.props;

      if (categoryVideos[`${categoryId}_videos`] === undefined) {
        const catId = !isEmpty(video) ? video.items[0].snippet.categoryId : categoryId;

        fetchCategoryVideos(catId, 20);
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { videoId } = match.params;

    if (videoId !== prevProps.match.params.videoId) {
      this.props.fetchVideo(videoId);
    }
  }

  render() {
    const { match, categoryVideos, video } = this.props;
    const { videoId } = match.params;

    const videoAvailable = !isEmpty(video);

    const videosAvailable = !isEmpty(categoryVideos) && videoAvailable && categoryVideos[`${video.items[0].snippet.categoryId}_videos`];

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
                <div className="loader-container">
                  <Spin size="large"/>
                </div>
            }
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            {
              videosAvailable ?
                <Playlist
                  categoryId={video.items[0].snippet.categoryId}
                  videos={categoryVideos[`${video.items[0].snippet.categoryId}_videos`]}
                /> :
                <div className="loader-container">
                  <Spin size="large"/>
                </div>
            }
          </Col>
        </Row>
      </Nav>
    );
  }
}

export default VideoView;
