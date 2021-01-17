<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-14 22:59:13
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 21:42:52
-->

<template>
  <div class="navbar-place"></div>
  <div class="navbar">
    <Hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hamburger from '@/components/Hamburger'
export default {
  name: 'Navbar',
  components: {
    Hamburger,
  },
  computed: {
    ...mapGetters(['sidebar', 'size', 'device']),
  },
  methods: {
    toggleSideBar() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar,
.navbar-place {
  height: 50px;
}
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 210px);
  overflow: hidden;
  // position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 46px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
.navbar-place {
  background-color: salmon;
}
</style>
