<template>
  <div class="homebox">
    <el-row>
     
        <div class="grid-content bg-purple-dark">xxx系统</div>
     
    </el-row>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          unique-opened
          router
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/page1">选项1</el-menu-item>
              <el-menu-item index="/page2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!--路由的出口  右侧显示部分-->
    <el-row class="leftbox">
      <el-col :span="18" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  /*头部的样式*/
  .bg-purple-dark {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid lightblue;
    text-align: center;
    line-height: 50px;
  /*  color: white;*/
  }

  /*侧边栏对应内容的样式*/
  .leftbox {
    position: fixed;
    left:260px;
    top: 80px;
    width: 1000px;
    text-align: center;
  }

  .el-submenu .el-menu-item {
    min-width: 180px;
  }
  .el-submenu .el-menu-item[data-v-7c66a6a2]{
    min-width: 157px;
  }
</style>

