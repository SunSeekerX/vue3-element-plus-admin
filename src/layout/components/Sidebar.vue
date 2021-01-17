<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-14 22:59:19
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 21:17:54
-->

<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="5">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="6">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    width: 210px !important;
    height: 100%;
    overflow: hidden;
    font-size: 0;
    background-color: #304156;
    transition: width 0.28s;

    // reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }

    .el-scrollbar__bar.is-vertical {
      right: 0;
    }

    .el-scrollbar {
      height: 100%;
    }

    &.has-logo {
      .el-scrollbar {
        height: calc(100% - 50px);
      }
    }

    .is-horizontal {
      display: none;
    }

    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }

    .svg-icon {
      margin-right: 16px;
    }

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }

    .el-menu {
      width: 100% !important;
      height: 100%;
      border: none;
    }

    // menu hover
    .submenu-title-noDropdown,
    .el-submenu__title {
      &:hover {
        background-color: #263445 !important;
      }
    }

    .is-active > .el-submenu__title {
      color: #f4f4f5 !important;
    }

    & .nest-menu .el-submenu > .el-submenu__title,
    & .el-submenu .el-menu-item {
      min-width: 210px !important;
      background-color: #f4f4f5 !important;

      &:hover {
        background-color: #001528 !important;
      }
    }
  }

  .hideSidebar {
    .sidebar-container {
      width: 54px !important;
    }

    .main-container {
      margin-left: 54px;
    }

    .submenu-title-noDropdown {
      position: relative;
      padding: 0 !important;

      .el-tooltip {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }

        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }

    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            display: inline-block;
            width: 0;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }
      }
    }
  }

  .el-menu--collapse .el-menu .el-submenu {
    min-width: 210px !important;
  }

  // mobile responsive
  .mobile {
    .main-container {
      margin-left: 0;
    }

    .sidebar-container {
      width: 210px !important;
      transition: transform 0.28s;
    }

    &.hideSidebar {
      .sidebar-container {
        pointer-events: none;
        transform: translate3d(-210px, 0, 0);
        transition-duration: 0.3s;
      }
    }
  }

  .withoutAnimation {
    .main-container,
    .sidebar-container {
      transition: none;
    }
  }
}

// when menu collapsed
.el-menu--vertical {
  & > .el-menu {
    .svg-icon {
      margin-right: 16px;
    }
    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }
  }

  .nest-menu .el-submenu > .el-submenu__title,
  .el-menu-item {
    &:hover {
      // you can use #001528
      background-color: #263445 !important;
    }
  }

  // the scroll bar appears when the subMenu is too long
  > .el-menu--popup {
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
}
</style>
