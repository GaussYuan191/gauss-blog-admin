import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common/scss/reset.scss';
// 入口
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
