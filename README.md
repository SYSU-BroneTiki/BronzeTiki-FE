# 开发

## 前置条件

* UI框架：element-ui

* css预处理器: stylus

* 单位使用rem （已预设 html font-size = 50px = 1 rem）

* 移动端界面大小：iphone6/7/8 （chrome）

* 代码：使用2空格缩进


## src目录：

``` bash
├─assets
│  └─styles             样式表目录
│      └─iconfont       保存图标文件
├─pages                 保存页面
│  ├─home               首页组件目录
│  │  └─components      首页子组件
│  └─person             个人组件目录
│      └─components     个人页面子组件
└─router
```

# bronzetiki

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
