<template>
  <div class="homebox">
    <div class="grid-content bg-purple-dark">dorker管理系统</div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
    
          router
         
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu
            v-for="(val,index) in this.$router.options.routes"
            :key="index"
            v-show="val.hidden"
            :index="val.path"
            
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{val.name}}</span>
            </template>
            <el-menu-item-group
              v-show="val.children"
              v-for="child,index in val.children"
              :key="index"
            >
              <el-submenu :index="child.path" v-if="child.children">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  {{child.name}}
                </template>
                <el-menu-item v-for="item,index in child.children" :index="item.path" :key="index">
                  <i class="el-icon-news"></i>
                  {{item.name}}
            
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="child.path" v-show="child.hidden">
                <i class="el-icon-message"></i>
                {{child.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
  data() {
    return {
      isCollapse: false,
      collapsed: false
    };
  },
  created() {
    console.log(this.$router.options.routes);
    console.log(this.$route.path,'path');
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
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
  left: 260px;
  top: 80px;
  width: 1000px;
  text-align: center;
}

.el-submenu .el-menu-item {
  min-width: 180px;
}
.el-submenu .el-menu-item[data-v-7c66a6a2] {
  min-width: 157px;
}
</style>

