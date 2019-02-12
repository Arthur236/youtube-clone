import initialState from './initialState';
import constants from '../constants';

const {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE,
} = constants;

export default (state = initialState.video, action) => {
  switch (action.type) {
    case FETCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        video: action.payload,
        categoryId: action.payload.items[0].snippet.categoryId,
      };

    case FETCH_VIDEO_FAILURE:
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
