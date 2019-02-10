import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// if set elsewhere, this will override global default for all requests using this instance
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
