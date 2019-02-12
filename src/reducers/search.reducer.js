import initialState from './initialState';
import constants from '../constants';

const {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  CLEAR_SEARCH,
} = constants;

export default (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        nextPageToken: action.payload.nextPageToken,
        pageInfo: action.payload.pageInfo,
        searchResults: state.searchResults.concat(action.payload.items),
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        nextPageToken: '',
        pageInfo: {},
        searchResults: [],
      };

    default:
      return state;
  }
};
