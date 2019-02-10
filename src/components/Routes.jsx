import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import VideoView from '../containers/VideoView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories/:categoryName/videos/:videoId" component={VideoView} />
    </Switch>
  );
};

export default Routes;
