import { connect } from 'react-redux';

import Playlist from '../components/Playlist';

export const mapStateToProps = ({ categoryVideos }) => {
  return {
    categoryVideos
  };
};

export default connect(mapStateToProps, null)(Playlist);
