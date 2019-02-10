import { combineReducers } from 'redux';

import playlist from './playlist.reducer';
import video from './video.reducer';
import categoryVideos from './categoryVideos.reducer';

const rootReducer = combineReducers({
  playlist,
  video,
  categoryVideos,
});

export default rootReducer;
