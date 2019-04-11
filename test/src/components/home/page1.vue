<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 10px;">
      <div class="demobox">
        <div class="demo-input-suffix">
          <div class="box1">
            <span>容 器 名：</span>
            <el-input
              @change="containerchange"
              @focus="change1"
              placeholder="请输入容器名"
              v-model="input"
            ></el-input>
            <span>端口号 port：</span>
            <el-input
              @change="containerchange2"
              @focus="change2"
              placeholder="请输入端口号"
              v-model="input2"
            ></el-input>
          </div>

          <div class="box2">
            <span>JDK版本：</span>
            <el-autocomplete
              v-model="state4"
              :fetch-suggestions="querySearchAsync"
              placeholder="请选择"
              @select="handleSelect1"
            ></el-autocomplete>

            <span>宿主机目录：</span>
            <el-input
              @change="containerchange3"
              @focus="change3"
              placeholder="请输入宿主机目录"
              v-model="input3"
            ></el-input>
          </div>

          <div class="box3">
            <span>镜 像 名 ：</span>
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state3"
              :fetch-suggestions="querySearch"
              placeholder="请选择"
              @select="handleSelect"
            >
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>

            <span>Tomcat版本 :</span>
            <el-autocomplete
              v-model="state2"
              :fetch-suggestions="querySearchAsync2"
              placeholder="请选择"
              @select="handleSelect2"
            ></el-autocomplete>
          </div>

          <div class="box4">
            <span class="box41">{{showbox}}</span>
            <el-button type="danger" @click="submit" plain :disabled=isDisable>提交</el-button>
          </div>
        </div>

        <!--分割线-->
        <!-- <div style="border-bottom: 1px solid lightgray; width: 700px;margin-top: 60px"></div>-->
      </div>
    </el-card>

    <div style="float: right;padding-right: 50px;margin-bottom:10px">
      <el-button @click="startup" :disabled="isDisable">启动</el-button>
      <el-button @click="stop">停止</el-button>
      <el-button @click="restart">重启</el-button>
    </div>
    <el-table
      ref="singleTable"
      :data="table"
      highlight-current-row
      @current-change="handleCurrentChange"
      height="300"
      style="width: 100%"
      @row-click="showRow"
    >
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column type="index" width="55"></el-table-column>
      <!--      <el-table-column
        fixed
        type="index"
        width="50">
      </el-table-column>-->
      <el-table-column property="date" label="容器名" width="150"></el-table-column>
      <el-table-column property="name" label="镜像名" width="120"></el-table-column>
      <el-table-column property="port" label="端口号"></el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Alert :tableData31="tableData31" v-if="Edit" @cancel="fn()"></Alert>
  </div>
</template>

<script>
import Alert from "@/common/alert.vue";
import axios from "axios";
export default {
  name: "page1",
  components: {
    Alert: Alert
  },
  data() {
    return {
      //提示框
      showbox: "",
      Edit: false,
      //容器名
      input: "",
      //端口名
      input2: "",
      //宿主机目录
      input3: "",
      //镜像名
      restaurants: [],
      state3: "",
      //jdk版本
      restaurants1: [],
      state4: "",
      timeout: null,
      //tomcat版本
      restaurants2: [],
      state2: "",
      timeout2: null,
      //table
      currentRow: null,
      tableData31: [{ date: "", name: "", port: "" }],
      tableData3: [
        {
          id: "1",
          date: "容器名",
          name: "镜像1",
          port: "6706",
          status: "是",
          mainManageBrand: 0
        },
        {
          id: "2",
          date: "容器名2",
          name: "镜像2",
          port: "6706",
          status: "是",
          mainManageBrand: 0
        },
        {
          id: "3",
          date: "容器名3",
          name: "镜像3",
          port: "6706",
          status: "是"
        },
        {
          id: "4",
          date: "容器名4",
          name: "镜像4",
          port: "6706",
          status: "是"
        },
        {
          id: "5",
          date: "容器名5",
          name: "镜像5",
          port: "6706",
          status: "是"
        },
        {
          id: "6",
          date: "容器名6",
          name: "镜像6",
          port: "6706",
          status: "是"
        },
        {
          id: "7",
          date: "容器名7",
          name: "镜像7",
          port: "6706",
          status: "是"
        }
      ],
      multipleSelection: [],
      //  radio: '1'单选
      radio: "1",
      search: "",
      //不能连续提交  isDisable
      isDisable: false
    };
  },
  created() {
    console.log(1, "created 发请求date1");
    var obj = { name: 2, password: "3" };
    axios.post('/what',obj).then(date => {
      console.log( "arr");
      // console.log(date, "date", obj);
    });
  },
  computed: {
    // 模糊搜索
    table() {
      const search = this.search;
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.tableData3.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some(key => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData3;
    }
  },
  methods: {
    fn() {
      this.Edit = false;
    },
    //容器名改变  正则
    containerchange(val) {
      console.log(val, "container");
      var reg = /^[0-9a-zA-Z_]{1,}$/g;
      if (reg.test(val)) {
        this.input = val;
        this.showbox = "";
        console.log(this.input);
      } else {
        // alert("请不要输入空格、特殊字符!,?,()");
        this.showbox = "提示：容器名 请不要输入空格、特殊字符!,?,()";
        this.input = "";
      }
    },
    change1(val) {
      console.log(val, "containerfocus");
    },
    //端口号
    containerchange2(val) {
      console.log(val, "container");
      // var reg=/^[89][0-9]+[0-9]+[0-9]+$/g;
      var reg = /^((8[0-9][0-9][0-9])|^(9000))$/g;
      if (reg.test(val)) {
        this.input2 = val;
        this.showbox = "";
        console.log(this.input);
      } else {
        // alert("请输入8000-9000之间的数字");
        this.showbox = "提示：端口号 请输入8000-9000之间的数字";
        this.input2 = "";
      }
    },
    change2(val) {
      console.log(val, "containerfocus");
    },
    //宿主机目录
    containerchange3(val) {
      console.log(val, "container");
      // var reg=/^[89][0-9]+[0-9]+[0-9]+$/g;
      var reg = /^[\u4E00-\u9FA5]+$/g;
      if (reg.test(val)) {
        this.input3 = val;
        this.showbox = "";
        console.log(this.input);
      } else {
        // alert("请输入文本");
        this.showbox = "提示：宿主机目录 请输入文本";
        this.input3 = "";
      }
    },
    change3(val) {
      console.log(val, "containerfocus");
    },

    //镜像名
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    //jdk版本
    loadAll1() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants1;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 0 * Math.random());
    },

    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect1(item) {
      console.log(item, "jdk版本号吗"); //
    },
    //tomcat版本下拉
    loadAll2() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        }
      ];
    },
    querySearchAsync2(queryString, cb) {
      var restaurants = this.restaurants2;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 0 * Math.random());
    },
    createStateFilter2(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect2(item) {
      console.log(item);
    },
    //table
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log(val, "选中的行");
      this.multipleSelection = val;
    },
    //详情
    handleEdit(index, row) {
      this.tableData31 = row;
      this.Edit = true;
      console.log(index, row);
    },
    //table
    handleCurrentChange(val) {
      console.log(val, "选中的哪一行");
      this.currentRow = val;
    },
    showRow(row) {
      this.radio = this.tableData3.indexOf(row);
      this.selected = row;
    },
    //提交按钮
    submit() {
      // console.log("提交方法");
      // console.log(this.input, "容器名");
      // console.log(this.input2, "端口号");
      // //console.log(this.)
      // console.log(this.state4, "jdk版本");
      // console.log(this.input3, "宿主机目录");
      // console.log(this.state3, "镜像名");
      // console.log(this.state2, "Tomcat版本");
      // alert(
      //   `容器名${this.input} ` +
      //     `端口号是${this.input2} ` +
      //     `jdk版本是${this.state4} ` +
      //     `宿主机目录是${this.input3} ` +
      //     `镜像名是${this.state3} ` +
      //     `tomcat版本是${this.state2}`
      // );
      var obj = {
        容器名: this.input,
        端口号: this.input2,
        jdk版本: this.state4,
        宿主机目录: this.input3,
        镜像名: this.state3,
        tomcat版本: this.state2
      };
      this.isDisable=true
      //发请求
      axios.post("/what", obj).then(date => {
        console.log(date.data.arr);
        console.log(obj, "post2", date, "请求的数据2");
        this.isDisable=true;
        setTimeout(()=>{
          this.isDisable=false;
        },200)
      });
    },
    //启动
    startup() {
      if (this.currentRow) {
        this.isDisable = true; //开始可以点击
        axios.post("/what",{'id': this.currentRow.id}).then(date => {
          console.log(this.currentRow.id, "进入请求选中启动的行");
          setTimeout(() => {
            this.isDisable = false;
          }, 500);
          this.isDisable = true; //执行请求后不可以点击了  2s延迟
        });
      } else {
        alert("请选择启动的行");
      }
    },
    //停止
    stop() {
      if (this.currentRow) {
        this.isDisable = true;
        axios.post("/what", this.currentRow.id).then(date => {
          console.log(this.currentRow.id, "进入请求选中停止的行");
          setTimeout(() => {
            this.isDisable = false;
          }, 500);
          this.isDisable = true;
        });
      } else {
        alert("请选择停止的行");
      }
    },
    restart() {
      if (this.currentRow) {
        this.isDisable = true;
        axios.post("/what", this.currentRow.id).then(date => {
          console.log(this.currentRow.id, "进入请求选中重启的行");
          setTimeout(() => {
            this.isDisable = false;
          }, 500);
          this.isDisable = true;
        });
      } else {
        alert("请选择重启的行");
      }
    }
  },

  mounted() {
    //镜像名
    this.restaurants = this.loadAll();
    //jdk版本
    this.restaurants1 = this.loadAll1();
    //Tomcat版本
    this.restaurants2 = this.loadAll2();
  }
};
</script>

<style scoped lang='less'>
.demobox {
  height: 130px;
  position: relative;
  /*padding-left: 50px;*/
  .box1 {
    text-align: left;
    margin-bottom: 5px;
  }
  .box2 {
    margin-bottom: 5px;
    text-align: left;
  }
  .box3 {
    text-align: left;
  }
  .box4 {
    margin-top: 1px;
    position: relative;
    .el-button--danger.is-plain {
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .box41 {
      color: red;
      font-family: "宋体";
    }
  }
}

.el-input {
  width: 200px;
}

.demo-input-suffix {
}
</style>
<style lang="less">
/*  .el-input el-input--small el-input--prefix{
      width: 400px;
    }*/

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}

//卡片的背景颜色
.el-card {
  background: lightcyan;
  font-family: "微软雅黑";
}
.el-input--mini .el-input__inner {
  width: 158px;
}
</style>
