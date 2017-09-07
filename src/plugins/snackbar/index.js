/**
 * Vue.use注入后，在实例中调用
 * this.$snackbar.show(message)
 */
import SnackBarComponent from './Snackbar';

let $vm;

const Plugin = {
  install(Vue) {
    //  在dom中插入组件
    if (!$vm) {
      const Snackbar = Vue.extend(SnackBarComponent);
      $vm = new Snackbar({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }
    const snackbar = {
      /**
       * 
       * @param {String} message 显示的提示
       */
      show(message) {
        $vm.visibility = true;
        $vm.message = message;
      },
    };
    if (!Vue.$snackbar) {
      Vue.$snackbar = snackbar;
    }
    Vue.mixin({
      created() {
        this.$snackbar = Vue.$snackbar;
      },
    });
  },
};

export default Plugin;
