import { connect } from 'react-redux';

import { fetchCategoryVideos } from '../actions/categoryVideos.action';
import { fetchVideo } from '../actions/video.action';

import VideoView from '../components/VideoView';

export const mapStateToProps = ({ categoryVideos, video }) => {

  return {
    categoryVideos,

    videoLoading: video.loading,
    videoSuccess: video.success,
    video: video.video,
    categoryId: video.categoryId,
  };
};

export default connect(mapStateToProps, {
  fetchCategoryVideos,
  fetchVideo
})(VideoView);
