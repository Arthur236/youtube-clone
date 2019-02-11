import initialState from './initialState';
import constants from '../constants';

const {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
} = constants;

export default (state = initialState.channel, action) => {
  switch (action.type) {
    case FETCH_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        channel: action.payload,
      };

    case FETCH_CHANNEL_FAILURE:
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
