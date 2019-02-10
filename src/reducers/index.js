import { combineReducers } from 'redux';

import video from './video.reducer';
import categoryVideos from './categoryVideos.reducer';

const rootReducer = combineReducers({
  video,
  categoryVideos,
});

export default rootReducer;
