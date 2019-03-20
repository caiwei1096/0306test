<template>
  <div>
    <!-- <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-table
      ref="multipleTable"
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="dialogCheck"
      @selection-change="dialogCheckChange"
      @row-click="showRow"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="选择" width="50" align="center">
        <template slot-scope="scope">
          <el-radio class="radio" text-color="#111" v-model="radio" :label="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
    </el-table> -->
      <el-main v-model="selected" >

       <span class="field-label">方块选择:</span>
        <!-- 选择屏幕框 -->
          <select v-model="selected" @change="selectbj(selected)">
            <option v-for="option in layouts" :value="option.value">
                {{ option.name }}
            </option>
          </select>
      <div class="block" style="height:400px">
            <!-- {{selected}} -->
            <div style="height:100%;width:100%" v-if="selected==0">
            <!-- 1*1布局 -->
                <el-row :gutter="10" type="flex" class="grid-one-contentheight" justify="center">
                  <el-col :span="18"></el-col>
                </el-row>
            </div>
            <!-- 2*1布局 -->
            <div style="height:100%;width:100%" v-else-if="selected==1">
                <el-row :gutter="0" type="flex" class="row-bg el-row-two" justify="space-between">
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                </el-row>
            </div>
            <!-- 2*2 -->
            <div style="height:100%;width:100%" v-else-if="selected==2">
              <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                </el-row>
            </div>
            <!-- 3*2布局 -->
            <div style="height:100%;width:100%" v-else-if="selected==3">
              <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                  <el-col :span="12"><div class="grid-content "></div></el-col>
                </el-row>
            </div>
            <!-- 3*3模式 -->
            <div style="height:100%;width:100%" v-else-if="selected==4">
                <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                </el-row>
            </div>
            <!-- 模式 -->
            <div style="height:100%;width:100%" v-else>
               <el-row :gutter="10" type="flex" class="row-bg" justify="start">
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                  <el-col :span="8"><div class="grid-a-contentWidth"></div></el-col>
                </el-row>
                <br>
                <el-row :gutter="10" type="flex" class="row-bg" justify="start">
                    <el-col :span="8">
                      <div class="grid-a-contentWidth"></div>
                      <br>
                      <div class="grid-a-contentWidth"></div>
                      </el-col>
                    <el-col :span="16"><div class="grid-a-content-a-Width" ></div></el-col>
                </el-row>  
            </div>
          </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
      selected: 0,
      layouts: [
        { 'name': '1x1模式', 'value': '0' },
        { 'name': '2x1模式', 'value': '1' },
        { 'name': '2x2模式', 'value': '2' },
        { 'name': '3x2模式', 'value': '3' },
        { 'name': '3x3模式', 'value': '4' },
        { 'name': '1+5模式', 'value': '5' }
      ],
      search:'',
      selectioned: "",
      radio: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          isSelected:false
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
           isSelected:false
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      console.log(rows, "rowsrows");
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log(val,'val')
      this.multipleSelection = val;
    },

    showRow(row) {
      // console.log(e.target)
      console.log(row, "row");
      this.radio = this.tableData3.indexOf(row);
      this.selected = row;
    },
    dialogCheck: function(selection, row) {
      this.$refs.multipleTable.clearSelection();
      if (selection.length === 0) {
        // 判断selection是否有值存在
        return;
      }
      if (row) {
        this.selectioned = row;
        this.$refs.multipleTable.toggleRowSelection(row, true);
      }
    },

    /**
     *  取消单选的checkbox
     */
    dialogCheckChange(row) {
     
      if (row.length === 0) {
        this.selectioned = null;
      }
      if(row.length!==1){
       console.log(this,'row')
      }
    }
  }
};
</script>

<style scoped>
.box-card{
    width: 400px;
    margin: 20px auto;
  }
  .block{
    padding: 30px 24px;
    background-color: rgb(27, 16, 16);
  }
  .alert-item{
    margin-bottom: 10px;
  }
  .tag-item{
    margin-right: 15px;
  }
  .link-title{
    margin-left:35px;
  }
  .components-container {
		position: relative;
		height: 100vh;
	}
 
	.left-container {
		background-color: #F38181;
		height: 100%;
	}
 
	.right-container {
		background-color: #FCE38A;
		height: 200px;
	}
 
	.top-container {
		background-color: #FCE38A;
		width: 100%;
		height: 100%;
	}
 
	.bottom-container {
		width: 100%;
		background-color: #95E1D3;
		height: 100%;
	}
 
  .left-container-twoOne {
		background-color: rgb(110, 75, 75);
    height: 100%;
  }
 
  .container-onetoOne {
      background-color: rgb(47, 80, 74);
      height: 100%;
      width: 50%;
  }
 
  .container-onetoTwo {
      background-color: rgb(61, 19, 56);
      height: 100%;
      width: 50%;
  }
 
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #57926b;
  }
  .bg-purple {
    background: #7e2970;
  }
  .bg-purple-light {
    background: #071c4d;
  }
  .grid-content {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
  }
  .grid-contentB {
    background-color: rgb(64, 56, 134);
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
  }
  .grid-a-contentWidth {    
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 100px;
  }
  .grid-a-content-a-Width {    
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 220px;
  }
 
  .grid-one-contentheight {    
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 100%;
  }
 
.el-row-two {
    margin-bottom: 80px;
    margin-top: 80px;
  
  }
</style>
