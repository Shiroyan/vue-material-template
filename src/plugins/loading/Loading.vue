<template>
  <div id="loading-wrapper" v-show="isLoading">
    <mu-circular-progress :size="60" color="white" :strokeWidth="5" style="position:fixed;top:40%"/>
  </div>
</template>
<script>

import circularProgress from 'muse-components/circularProgress';

export default {
  components: {
    'mu-circular-progress': circularProgress,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
<style lang="less" scoped>
@import '../../styles/index.less';

#loading-wrapper {
  .fullWH;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  text-align: center;
}
</style>
