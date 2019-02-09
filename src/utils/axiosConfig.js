import axios from 'axios';

export default () => {
  axios.defaults.baseURL = process.env.REACT_APP_YOUTUBE_API_URL;
};
