import axios from 'axios';
import constants from '../constants';

const {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CLEAR_SEARCH,
} = constants;

export const search = (queryString, pageToken = '') => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    q: queryString,
    part: 'snippet',
    type: 'video',
    maxResults: 25,
    pageToken
  };

  dispatch(searchRequest());

  return axios.get('search', {params: options}).then((response) => {
    dispatch(searchSuccess(response.data));
  }).catch((error) => {
    dispatch(searchFail(error));
  });
};

export const searchRequest = () => ({ type: SEARCH_REQUEST });

export const searchSuccess = (results) => ({ type: SEARCH_SUCCESS, payload: results });

export const searchFail = (error) => ({ type: SEARCH_FAILURE, payload: error });

export const clearSearch = () => ({ type: CLEAR_SEARCH });
