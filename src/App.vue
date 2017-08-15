<template>
  <div class="container">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
@import "~@/style/style.scss";
html, body {
  border: 0;
  height: 100vh;
  width: 100vw;
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;

}

.slide-enter-active {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}

/* 进入时的状态，从右开始 */
.slide-enter {
  transform: translateX(100%);
  opacity: 0.1;
}
/* 离开时的状态，向左移动 */
// .slide-leave-to {
//   transform: translateX(-100%);
//   opacity: 0.1;
// }
</style>
