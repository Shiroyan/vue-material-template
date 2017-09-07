import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});



/**
 * 组件懒加载示例，慎用，松散的小文件容易增加请求数量，增加服务器负担。
 * 
 * {
      path: '/myDiscussion',
      component: (resolve) => {
        require(['../components/MyDiscussion.vue'], resolve);
      },
    },
 */