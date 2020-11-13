# 效果

[![D9QWm6.gif](https://s3.ax1x.com/2020/11/13/D9QWm6.gif)](https://imgchr.com/i/D9QWm6)


## 需求描述

仅需要一个界面，展示已有字体库样式，并支持搜索。

### 过程记录

 - `create-react-app project` 手脚架搭建项目
 - `yarn add antd` 引入antd
 - `yarn add sass`引入sass
 - `cnpm install node-sass sass-loader --save`使得项目支持sass


>为了快速得到文件包下的所有字体文件路径，调用了`node.js`中的`fs`文件模块。作为单独的工具类在`src/tootScript`文件夹下。
调用时，在路径中`node getListData.js`和`node getScssData.js`使用
[![D91gZ6.png](https://s3.ax1x.com/2020/11/13/D91gZ6.png)](https://imgchr.com/i/D91gZ6)


### 问题

1. 如何实现资源加载前的Loading？

2. 如何在react中直接调用toolScript文件功能？

