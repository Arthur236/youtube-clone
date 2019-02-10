import axios from 'axios';
import constants from '../constants';

const {
  FETCH_PLAYLIST_ITEMS_REQUEST,
  FETCH_PLAYLIST_ITEMS_SUCCESS,
  FETCH_PLAYLIST_ITEMS_FAILURE,
} = constants;

export const fetchPlaylistItems = (playlistId) => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet',
    maxResults: 20,
    playlistId
  };

  dispatch(fetchPlaylistItemsRequest());

  return axios.get('playlistItems', {params: options}).then((response) => {
    dispatch(fetchPlaylistItemsSuccess(response.data));
  }).catch((error) => {
    dispatch(fetchPlaylistItemsFail(error));
  });
};

export const fetchPlaylistItemsRequest = () => ({ type: FETCH_PLAYLIST_ITEMS_REQUEST });

export const fetchPlaylistItemsSuccess = (playlist) => ({ type: FETCH_PLAYLIST_ITEMS_SUCCESS, payload: playlist });

export const fetchPlaylistItemsFail = (error) => ({ type: FETCH_PLAYLIST_ITEMS_FAILURE, payload: error });
