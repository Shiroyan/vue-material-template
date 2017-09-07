<template>
  <mu-snackbar 
    v-if="visibility" 
    :message="message" 
    action="关闭" 
    actionColor="pink500"
    @actionClick="hideSnackBar"
    @close="hideSnackBar">
  </mu-snackbar>
</template>

<script>
import snackBar from 'muse-components/snackbar';

export default {
  components: {
    'mu-snackbar': snackBar,
  },
  data() {
    return {
      timer: '',
      visibility: false,
      message: '',
    };
  },
  methods: {
    hideSnackBar() {
      this.visibility = false;
      if (this.timer) clearTimeout(this.timer);
    },
  },
  watch: {
    visibility(newVal, oldVal) {
      if (newVal) {
        this.timer = setTimeout(() => {
          this.hideSnackBar();
        }, 2000);
      }
    },
  },
};
</script>

