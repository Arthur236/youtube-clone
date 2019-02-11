import { combineReducers } from 'redux';

import video from './video.reducer';
import categoryVideos from './categoryVideos.reducer';
import channel from './channel.reducer';

const rootReducer = combineReducers({
  video,
  categoryVideos,
  channel,
});

export default rootReducer;
