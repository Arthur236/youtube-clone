import { connect } from 'react-redux';
import { fetchPlaylistItems } from '../actions/playlist.action';

import Playlist from '../components/Playlist';

export const mapStateToProps = ({ playlist }) => {
  const { loading, success, videos } = playlist;

  return {
    loading,
    success,
    videos,
  };
};

export default connect(mapStateToProps, {
  fetchPlaylistItems
})(Playlist);
