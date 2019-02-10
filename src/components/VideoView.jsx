import React from "react";
import { isEmpty } from 'lodash';
import { Row, Col, Spin } from 'antd';

import Nav from './NavWrapper';
import Video from './Video';
import Playlist from '../containers/Playlist';

class VideoView extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const { videoId } = match.params;

    this.props.fetchVideo(videoId);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.match.params.videoId)
    console.log(prevProps.match.params.videoId)

    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
  }

  render() {
    const { match, categoryVideos, video } = this.props;
    const { categoryName, videoId } = match.params;
    const videosAvailable = (!isEmpty(categoryVideos));

    return (
      <Nav>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            {
              !isEmpty(video) ?
                <Video videoId={videoId} video={video}/> :
                <Spin size="large"/>
            }
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            {
              videosAvailable ?
                <Playlist
                  categoryName={categoryName}
                  videos={categoryVideos[`${categoryName}_videos`].items}
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
