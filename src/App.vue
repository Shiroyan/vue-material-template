<template>
  <div id="app">
    <transition mode="out-in"
                name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                :duration="{ enter: 400, leave: 400 }">
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
<style>
  html {
    font-size: 14px;
  }
</style>
