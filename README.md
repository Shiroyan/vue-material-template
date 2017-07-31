# demo

> material-ui demo

## Build Setup

``` bash
# install dependencies
npm install

# 一些修改
在node_module中找到muse-ui，打开src/styles/import.less
@{MuseThemeUi} =>  ./themes/variables/light.less
若要更改主题在./themes/variables中找到想要的，or直接更改light.less的变量

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
