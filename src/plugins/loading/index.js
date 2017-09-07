/**
 * Vue.use注入后，在实例中使用
 * this.$loading.show() /  this.$loading.hide()
 * 显示loading动画
 */
import LoadingComponent from './Loading';

let $vm;

const Plugin = {
  install(Vue) {
    if (!$vm) {
      let Loading = Vue.extend(LoadingComponent);
      $vm = new Loading({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }

    const loading = {
      show() {
        $vm.isLoading = true;
      },
      hide() {
        $vm.isLoading = false;
      },
    };

    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      },
    });
  },
};
export default Plugin;

