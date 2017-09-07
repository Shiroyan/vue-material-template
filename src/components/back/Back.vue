<template>
  <mu-float-button icon="arrow_back" secondary class="back-btn" @click="back">
  </mu-float-button>
</template>

<script>
/**
 * 默认返回上一个页面，当有配置to参数时，返回到to
 */
import floatButton from 'muse-components/floatButton';

export default {
  props: {
    to: {
      type: [Object, String],
      default: undefined,
    },
  },
  methods: {
    back() {
      if (!this.to || this.to === '') {
        this.$router.go(-1);
      } else {
        this.$router.push(this.to);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.back-btn {
  position: fixed;
  left: 5%;
  bottom: 5%;
  width: 48px;
  height: 48px;
}
</style>


