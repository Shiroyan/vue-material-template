# Vue template with Muse-ui

> [Muse-ui doc](http://www.muse-ui.org/#/index)\
> **相关的webpack配置已经配好，开箱即用，按需引入**

## 配置
1. `npm install` 安装所有依赖
2.	在`node_module/muse-ui/src/styles/import.less` 中找到 `@{MuseThemeUi}`
    将其更改为 `./themes/variables/light.less`
3.  如果你想更改主题颜色，只需要把`light.less`更改为其他预设主题即可。当然你也可以直接去修改颜色变量

## 目录结构 
    src
     |--assets               静态资源存放，如图片
     |--components           自定义的可重用组件
     |--plugins              自定义插件
     |--view                 业务相关页面
     |--styles               全局样式，包含mixin、variable、index等less文件
     |--api
         |-- ajax.js        ajax方法的封装
         |-- resource.js    Vue-resource资源文件     
     |--utils               常用的工具文件
     |--router              路由，Vue-router
     |--bussiness           业务相关的逻辑，如微信分享，验证之类的
     main.js                组件引入，插件注册
     App.vue

## 集成的插件
插件都是基于`Muse-ui`的\
目前已封装了`loading`、`dialog`、`snackbar`,  其中`snackbar`为弹出提示~\
使用方法在源码中已有注释~

## 集成的组件
`back`， 一个底部的回退键\
使用方法在源码中已有注释~

    运行
    npm run dev
    
    打包
    npm run build

    打包 - 生成包关系表，用于分析是否含有冗余的包
    npm run build --report