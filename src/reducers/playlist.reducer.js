import { combineReducers } from 'redux';

import initialState from './initialState';
import constants from '../constants';
import createReducer from '../utils/createReducer';

const { FETCH_PLAYLIST_ITEMS } = constants;

const fetchPlaylistItems = createReducer({
  initialState: initialState.playlistItems,
  actionName: FETCH_PLAYLIST_ITEMS,
});

export default combineReducers({
  fetchPlaylistItems
});
