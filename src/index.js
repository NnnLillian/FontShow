import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Spin } from 'antd';

document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
function subSomething() {
  if (document.readyState === "complete") {//当页面加载状态 
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } else {
    ReactDOM.render(
      <div className="spin">
        <Spin />
      </div>,
      document.getElementById('root')
    );
  }
}

reportWebVitals();
