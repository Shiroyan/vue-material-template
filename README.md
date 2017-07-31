# template

> vue with material-ui

> [muse-ui doc](http://www.muse-ui.org/#/index) 

## Build Setup

``` bash
# install dependencies
npm install

# some modify
*	find '@{MuseThemeUi}' in  node_module/muse-ui/src/styles/import.less
*	modify it to './themes/variables/light.less'
*	if you want to change the theme color, just change light.less to other less file, also you can modify the variable straightly 

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
