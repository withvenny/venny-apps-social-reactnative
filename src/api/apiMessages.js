import axios from 'axios';

export default axios.create({
  baseURL: 'https://io-venny-messages-api.herokuapp.com'
});
