// 应用的入口文件  

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import memoryUtils from './utils/memoryUtils';
import storageUtils from './utils/storageUtils'

//在localstorage中读取user并存储到内存中
const user = storageUtils.getUser()
memoryUtils.user = user


//将App组件标签渲染到Index页面的div上
ReactDOM.render(<App />,document.getElementById('root'));