<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-14 22:22:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 21:31:55
-->

<template>
  <div class="app-wrapper">
    <Sidebar />

    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;

  position: relative;
  width: 100%;
  height: 100%;

  // &.mobile.openSidebar {
  //   position: fixed;
  //   top: 0;
  // }

  .main-container {
    position: relative;
    min-height: 100%;
    margin-left: 210px;
    transition: margin-left 0.28s;
  }
  // .main-container {
  //   position: relative;
  //   min-height: 100%;
  //   margin-left: 210px;
  //   transition: margin-left 0.28s;
  // }
}
</style>
