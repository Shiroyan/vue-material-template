// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
//  ajax请求
import resource from '@/api/resource';
import ajax from '@/api/ajax';

//  基础样式
import 'muse-components/styles/base.less';

//  组件引入
import appBar from 'muse-components/appBar';

//  插件引入
import DialogPlugin from '@/plugins/dialog';
import SnackbarPlugin from '@/plugins/snackbar';
import LoadingPlugin from '@/plugins/loading';

// 业务逻辑


FastClick.attach(document.body);

Vue.use(DialogPlugin);
Vue.use(SnackbarPlugin);
Vue.use(LoadingPlugin);

//  注册ajax方法
Vue.prototype.resource = resource;
Vue.prototype.ajax = ajax;


const MUComponents = [
  appBar,
];

function registerComponents() {
  for(let i = 0; i < MUComponents.length; i++) {
    let c = MUComponents[i];
    Vue.component(c.name, c);
  }
}
registerComponents();


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
