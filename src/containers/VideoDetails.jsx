import { connect } from 'react-redux';

import { fetchChannel } from '../actions/channel.action';

import VideoDetails from '../components/VideoDetails';

export const mapStateToProps = ({ channel }) => {

  return {
    channel,
  };
};

export default connect(mapStateToProps, {
  fetchChannel,
})(VideoDetails);
