<template>
  <div id="app">
    <transition mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                :duration="{ enter: 250, leave: 250 }">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style lang="less">
  @import "styles/global.less";
  @import "styles/variable.less";

  html {
    font-size: 14px;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: @main;
  }
</style>
