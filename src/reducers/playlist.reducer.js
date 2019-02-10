import initialState from './initialState';
import constants from '../constants';

const {
  FETCH_PLAYLIST_ITEMS_REQUEST,
  FETCH_PLAYLIST_ITEMS_SUCCESS,
  FETCH_PLAYLIST_ITEMS_FAILURE,
} = constants;

export default (state = initialState.playlistItems, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PLAYLIST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        videos: action.payload,
      };

    case FETCH_PLAYLIST_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
