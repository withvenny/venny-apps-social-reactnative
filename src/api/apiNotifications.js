import axios from 'axios';

export default axios.create({
  baseURL: 'https://io-venny-notifications-api.herokuapp.com'
});
