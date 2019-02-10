import React from "react";
import { isEmpty } from 'lodash';
import { Row, Col, Spin } from 'antd';

import Nav from './NavWrapper';
import Video from './Video';
import Playlist from './Playlist';

class VideoView extends React.Component {
  componentDidMount() {
    const { match, videos } = this.props;
    const { playlistId, videoId } = match.params;
    const videosAvailable = (!isEmpty(videos) && videos.items);
    const vidId = videosAvailable ? videos.items[0].snippet.resourceId.videoId : videoId;

    console.log(vidId)

    this.props.fetchPlaylistItems(playlistId || 'PLFWHlH4koGZBEwqtJrnBpe1pbhUNlvSTE');
    this.props.fetchVideo(vidId || 'C9uOaDZDT-s');
  }

  render() {
    const {match, videos, video} = this.props;
    const { videoId } = match.params;
    const videosAvailable = (!isEmpty(videos) && videos.items);
    const videoAvailable = (!isEmpty(video));
    const vidId = videosAvailable ? videos.items[0].snippet.resourceId.videoId : videoId;

    console.log(this.props);

    return (
      <Nav>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            {
              videoAvailable ?
                <Video videoId={vidId} video={video}/> :
                <Spin size="large"/>
            }
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            {
              videosAvailable ?
                <Playlist videos={videos.items}/> :
                <Spin size="large"/>
            }
          </Col>
        </Row>
      </Nav>
    );
  }
}

export default VideoView;
