<template>
  <div class="mask">
    <ul>
      <el-button size="mini" class="icon" icon="el-icon-error" @click="cancel()">取消</el-button>
      <li>{{tableData31.date}}{{tableData31.name}}{{tableData31.port}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["tableData31", "dialogTableVisible"],
  data() {
    return {};
  },
  beforemounte() {
    console.log(this.tableData31);
  },
  methods: {
    cancel() {
      this.$emit("cancel", false);
    }
  }
};
</script>

<style lang='less'scoped >
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 160px;

  ul {
    position: relative;
    width: 800px;
    height: 1000px;
    top: 50%;
    margin: -200px auto ;
    background: #fff;
    .icon {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
