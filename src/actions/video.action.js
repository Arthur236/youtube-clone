import axios from 'axios';
import constants from '../constants';

const {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE,
} = constants;

export const fetchVideo = (videoId) => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    id: videoId,
    part: 'snippet,statistics',
  };

  dispatch(fetchVideoRequest());

  return axios.get('videos', {params: options}).then((response) => {
    dispatch(fetchVideoSuccess(response.data));
  }).catch((error) => {
    dispatch(fetchVideoFail(error));
  });
};

export const fetchVideoRequest = () => ({ type: FETCH_VIDEO_REQUEST });

export const fetchVideoSuccess = (video) => ({ type: FETCH_VIDEO_SUCCESS, payload: video });

export const fetchVideoFail = (error) => ({ type: FETCH_VIDEO_FAILURE, payload: error });
