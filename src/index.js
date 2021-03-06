import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// accessible from any request within the app
// axios.interceptors.request.use(request => {
//   return request;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// });
//
// axios.interceptors.response.use(response => {
//   console.log(response);
//   return response;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
