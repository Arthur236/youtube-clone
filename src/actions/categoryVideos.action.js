import axios from 'axios';
import constants from '../constants';

const {
  FETCH_CATEGORY_VIDEOS_REQUEST,
  FETCH_CATEGORY_VIDEOS_SUCCESS,
  FETCH_CATEGORY_VIDEOS_FAILURE,
} = constants;

export const fetchCategoryVideos = (categoryId, categoryName) => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet,statistics,id',
    chart: 'mostPopular',
    maxResults: 6,
    regionCode: 'US',
    videoCategoryId: categoryId
  };

  dispatch(fetchCategoryRequest(categoryName));

  return axios.get('videos', {params: options}).then((response) => {
    dispatch(fetchCategorySuccess(response.data, categoryName));
  }).catch((error) => {
    dispatch(fetchCategoryFail(error, categoryName));
  });
};

export const fetchCategoryRequest = (categoryName) => ({
  type: FETCH_CATEGORY_VIDEOS_REQUEST,
  categoryName
});

export const fetchCategorySuccess = (videos, categoryName) => ({
  type: FETCH_CATEGORY_VIDEOS_SUCCESS,
  payload: videos,
  categoryName
});

export const fetchCategoryFail = (error, categoryName) => ({
  type: FETCH_CATEGORY_VIDEOS_FAILURE,
  payload: error,
  categoryName
});
