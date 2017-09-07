/**
 * 使用方法：
 * 直接import导入，然后调用Vue.use使用即可。
 * 在实例中调用
 *    this.$dialog.show({})
 *    this.$dialog.hide()
 *
 */
import DialogComponent from './Dialog';

let $vm;

const Plugin = {
  install(Vue) {
    if (!$vm) {
      const Dialog = Vue.extend(DialogComponent);
      $vm = new Dialog({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }
    const dialog = {
      /**
       * 
       * @param {*} option 选项
       *    包含
       *    {String}        title         - 弹框标题
       *    {String}        content       - 弹框内容
       *    {function}      callback      - 确认回调
       *    {Boolean}       isShowCancel  - 是否显示取消按钮
       */
      show(option = {}) {
        if (typeof option === 'object') {
          Object.assign($vm, option);
        } else if (typeof option === 'string') {
          $vm.content = option;
        }
        $vm.isOpened = true;
      },
      hide() {
        $vm.isOpened = false;
      },
    };
    if (!Vue.$dialog) {
      Vue.$dialog = dialog;
    }
    Vue.mixin({
      created() {
        this.$dialog = Vue.$dialog;
      },
    });
  },
};

export default Plugin;
