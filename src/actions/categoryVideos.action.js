import axios from 'axios';
import constants from '../constants';

const {
  FETCH_CATEGORY_VIDEOS_REQUEST,
  FETCH_CATEGORY_VIDEOS_SUCCESS,
  FETCH_CATEGORY_VIDEOS_FAILURE,
} = constants;

export const fetchCategoryVideos = (categoryId, limit) => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet,statistics,id',
    chart: 'mostPopular',
    maxResults: limit,
    regionCode: 'US',
    videoCategoryId: categoryId
  };

  dispatch(fetchCategoryRequest(categoryId));

  return axios.get('videos', {params: options}).then((response) => {
    dispatch(fetchCategorySuccess(response.data, categoryId));
  }).catch((error) => {
    dispatch(fetchCategoryFail(error, categoryId));
  });
};

export const fetchCategoryRequest = (categoryId) => ({
  type: FETCH_CATEGORY_VIDEOS_REQUEST,
  categoryId
});

export const fetchCategorySuccess = (videos, categoryId) => ({
  type: FETCH_CATEGORY_VIDEOS_SUCCESS,
  payload: videos,
  categoryId
});

export const fetchCategoryFail = (error, categoryId) => ({
  type: FETCH_CATEGORY_VIDEOS_FAILURE,
  payload: error,
  categoryId
});
