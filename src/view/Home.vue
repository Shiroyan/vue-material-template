<template>
  <div style="text-align:center;width:60%;height:100%;position:fixed;top:30%;left:20%">
    <h1>Hello, This is Siro's template</h1>
    <div>
      <a href="javascript:void(0)" @click="showLoading">Loading</a>
      <a href="javascript:void(0)" @click="showDialog">Dialog</a>
      <a href="javascript:void(0)" @click="showSnackbar">Snackbar</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading() {
      this.$loading.show();
      setTimeout(() => {
        this.$loading.hide();
      }, 3000);
    },
    showDialog() {
      this.$dialog.show({
        title: 'From shiroyan: ',
        content: 'Hello~',
        callback: () => {
          alert('callback回调');
        },
        isShowCancel: true,
      });
    },
    showSnackbar() {
      this.$snackbar.show('Hello');
    },
  },
};
</script>


