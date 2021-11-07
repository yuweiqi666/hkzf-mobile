import React from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import App from './App';

// antd mobile 样式导入
import 'antd-mobile/dist/antd-mobile.css';

// 导入字体图标库的样式文件
import './assets/fonts/iconfont.css';

// 全局样式导入
import './assets/style/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
