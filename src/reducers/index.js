import { combineReducers } from 'redux';

import playlist from './playlist.reducer';

const rootReducer = combineReducers({
  playlist
});

export default rootReducer;
