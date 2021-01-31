<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-01-31 14:53:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:31:26
-->

<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0;" type="text">操作按钮</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix::before,
.clearfix::after {
  display: table;
  content: '';
}
.clearfix::after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
