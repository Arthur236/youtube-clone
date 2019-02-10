import { connect } from 'react-redux';

import { fetchCategoryVideos } from '../actions/categoryVideos.action';

import CategoryVideoList from '../components/CategoryVideoList';

export const mapStateToProps = ({ categoryVideos }) => {
  return {
    categoryVideos
  };
};

export default connect(mapStateToProps, {
  fetchCategoryVideos
})(CategoryVideoList);
