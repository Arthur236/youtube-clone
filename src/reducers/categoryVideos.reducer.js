import initialState from './initialState';
import constants from '../constants';

const {
  FETCH_CATEGORY_VIDEOS_REQUEST,
  FETCH_CATEGORY_VIDEOS_SUCCESS,
  FETCH_CATEGORY_VIDEOS_FAILURE,
} = constants;

export default (state = initialState.categoryVideos, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CATEGORY_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        [`${action.categoryId}_videos`]: action.payload,
      };

    case FETCH_CATEGORY_VIDEOS_FAILURE:
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
