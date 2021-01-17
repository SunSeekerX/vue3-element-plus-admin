<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-14 22:59:39
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 21:38:36
-->

<template>
  <div class="app-main">
    <p v-for="item of 100" :key="item"
      >君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。</p
    >
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  background-color: red;
}
</style>
