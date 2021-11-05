import React from 'react'

import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';

import App from './App'

// antd mobile 样式导入
import 'antd-mobile/dist/antd-mobile.css'; 

// 全局样式导入
import './assets/style/index.scss'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))