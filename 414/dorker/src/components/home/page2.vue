<template>
  <div style="float:left;">
    <div style="margin-bottom:10px">
      <span style="margin-left:20px">目录</span>
      <el-input
        style="width:230px"
        placeholder="请输入上传文件路径"
        v-model="input"
        @change="changeinput"
        clearable
      ></el-input>
    </div>
    <div style="width:100px height:100px;border:1px  transparent ">
      <span style="color:red">{{content}}</span>
    </div>
    <el-upload
      style="margin-top:20px"
      class="upload-demo"
      ref="upload"
      action="https://www.easy-mock.com/mock/5ca49105ea0dc52bf3b67ea8/testdate/what"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :disabled="disabled"
    >
      <el-button 
      :disabled="disabled"
      slot="trigger" 
      size="small" 
      type="primary"
      @click="select">选取文件</el-button>
      <el-button
        :disabled="disabled1"
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
      >上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">
        <span>不允许上传sh/pl/php/sql/bat/dmp!</span>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
      input: "",
      content: "",
      //选取文件
      disabled: true,
      //上传到服务器
      disabled1: true,
      fileList: [
        
      ]
    };
  },
  methods: {
    changeinput() {
      var reg = /^[a-zA-Z0-9_\\\/]+$/g;
      if (reg.test(this.input)) {
        this.disabled = false;
        this.content = "";
      } else {
        this.input = "";
        this.disabled = true;
        this.content = "注意：目录规则是字母、数字、下划线、反斜杠";
      }
      console.log(this.input, "input");
    },
    submitUpload() {
      console.log(222222222);
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log("移除");
      console.log(file, fileList);
    },
    select(){
      this.disabled1=false;
    },
    handlePreview(file) {
      console.log("已上传");
      console.log(file);
      
      // debugger;
      var reg = /\.(sh|pl|php|sql|bat|dmp)$/g;
      if (file.name.match(reg)) {
        this.disabled1=true;
        alert("不允许上传sh、pl、php、sql、bat、dmp结尾的文件");
      } else {
        file.url = this.input;
        console.log(this.fileList);
        if (this.fileList.indexOf(file) == -1) {
          this.fileList.push(file);
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
