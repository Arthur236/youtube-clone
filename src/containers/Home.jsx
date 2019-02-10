import { connect } from 'react-redux';

import { fetchPlaylistItems } from '../actions/playlist.action';
import { fetchVideo } from '../actions/video.action';

import Home from '../components/Home';

export const mapStateToProps = ({ playlist, video }) => {
  const { videos } = playlist;

  return {
    playlistLoading: playlist.loading,
    playlistSuccess: playlist.success,
    videos,

    videoLoading: video.loading,
    videoSuccess: video.success,
    video: video.video
  };
};

export default connect(mapStateToProps, {
  fetchPlaylistItems,
  fetchVideo
})(Home);
