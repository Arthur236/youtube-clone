import axios from 'axios';
import constants from '../constants';

const {FETCH_PLAYLIST_ITEMS} = constants;

export const fetchPlaylistItems = (playlistId) => {
  const options = {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    maxResults: 20,
    playlistId
  };

  return ({
    type: FETCH_PLAYLIST_ITEMS,
    payload: axios.get('playlistItems', { params: options }),
  });
};
