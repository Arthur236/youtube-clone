import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import VideoView from '../containers/VideoView';
import Search from '../containers/Search';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/videos/:videoId" component={VideoView} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
