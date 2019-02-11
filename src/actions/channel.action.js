import axios from 'axios';
import constants from '../constants';

const {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
} = constants;

export const fetchChannel = (channelId) => (dispatch) => {
  const options = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    id: channelId,
    part: 'snippet',
  };

  dispatch(fetchChannelRequest());

  return axios.get('channels', {params: options}).then((response) => {
    dispatch(fetchChannelSuccess(response.data));
  }).catch((error) => {
    dispatch(fetchChannelFail(error));
  });
};

export const fetchChannelRequest = () => ({ type: FETCH_CHANNEL_REQUEST });

export const fetchChannelSuccess = (channel) => ({ type: FETCH_CHANNEL_SUCCESS, payload: channel });

export const fetchChannelFail = (error) => ({ type: FETCH_CHANNEL_FAILURE, payload: error });
