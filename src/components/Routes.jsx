import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import VideoView from '../containers/VideoView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/playlists/:playlistId/videos/:videoId" component={VideoView} />
    </Switch>
  );
};

export default Routes;
