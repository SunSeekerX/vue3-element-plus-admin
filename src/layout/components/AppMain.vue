<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-14 22:59:39
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:32:26
-->

<template>
  <div class="app-main">
    <router-view />
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
  padding: 20px;
}
</style>
