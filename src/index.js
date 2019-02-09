import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import axiosConfig from './utils/axiosConfig';

axiosConfig();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
