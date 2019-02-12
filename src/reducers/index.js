import { combineReducers } from 'redux';

import video from './video.reducer';
import categoryVideos from './categoryVideos.reducer';
import channel from './channel.reducer';
import search from './search.reducer';

const rootReducer = combineReducers({
  video,
  categoryVideos,
  channel,
  search,
});

export default rootReducer;
