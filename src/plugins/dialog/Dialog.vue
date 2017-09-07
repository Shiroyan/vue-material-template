<template>
  <div>
  <mu-dialog :open="isOpened" :title="title">
    <p>{{content}}</p>
    <p>{{extraContent}}</p>
    <mu-flat-button slot="actions" @click="cancel" primary label="取消" v-if="isShowCancel" />
    <mu-flat-button slot="actions" primary @click="confirm" label="确定"/>
  </mu-dialog>
</div>
</template>

<script>
/**
 * 无需显式引入，请参考plugins/dialog.js
 * 
 */
import dialog from 'muse-components/dialog';
import flatButton from 'muse-components/flatButton';

export default {
  components: {
    'mu-dialog': dialog,
    'mu-flat-button': flatButton,
  },
  data() {
    return {
      isOpened: false,
      title: '',
      content: '',
      extraContent: '',
      callback: undefined,
      isShowCancel: false,
    };
  },
  methods: {
    confirm() {
      this.isOpened = false;
      this.extraContent = '';
      this.callback && this.callback();
    },
    cancel() {
      this.isOpened = false;
    },
  },
};
</script>

<style scoped>
  p {
    color:rgba(71, 74, 79, 0.6);
  }
</style>



