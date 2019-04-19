<!--
 * @Description: 头部注释
 * @Author: luoling
 * @CreateFileTime: Do not edit
 * @LastEditors: luoling
 * @LastEditTime: 2019-04-14 12:50:10

 问题：三个组件分别传值，但父组件只有一个参数，所以，父组件这个参数需要接受三个值，，
      那getData接收的这三个值是以什么样的形式存放在这个变量中的呢，（暂且我认为是以数组的形式存储着），
      但是总觉得getData不是以这种方式进行存储的，那么我应该怎么看getData获取的值呢
 -->

<template>
  <div class="toubaoPerson">
    <div id="toubaoPersonInput">
      <span id="span1">投保人:</span>
      <el-input class="input1" v-model="toubaoPerson" placeholder="请输入投保人姓名"/>
    </div>
    <div class="tabsDiv">
      <el-tabs v-model="tabsAll">
        <el-tab-pane label="人险" name="first">
          <!-- 父组件向人险这个组件传递投保人这个信息 -->
          <personCom ref="personCom" :parentMsg="toubaoPerson" @parentEvent="getSubPersonData"></personCom>
        </el-tab-pane>
        <el-tab-pane label="房险" name="second">
          <houseCom ref="houseCom" :parentMsg="toubaoPerson" @parentEvent="getSubHouseData"></houseCom>
        </el-tab-pane>
        <el-tab-pane label="车险" name="third">
          <carCom ref="carCom" :parentMsg="toubaoPerson" @parentEvent="getSubCarData"></carCom>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-button type="primary" @click="save">保存</el-button>
    <el-dialog title="保单信息" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="投保人：" :label-width="formLabelWidth">
          <span id="span1">{{this.toubaoPerson}}</span>
        </el-form-item>
        <el-form-item label="被投保人：" :label-width="formLabelWidth">
          <span id="span1">{{this.parentData[0]}}</span>
        </el-form-item>
        <el-form-item label="房主：" :label-width="formLabelWidth">
          <span id="span1">{{this.parentData[1]}}</span>
        </el-form-item>
        <el-form-item label="车主：" :label-width="formLabelWidth">
          <span id="span1">{{this.parentData[2]}}</span>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import personCom from "@/components/personCom";
import houseCom from "@/components/houseCom";
import carCom from "@/components/carCom";

export default {
  name: "toubaoPerson",
  data() {
    return {
      toubaoPerson: "",
      tabsAll: "first",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      parentData: [] //定义了一个空对象，用来存储子组件传递过来的数据
    };
  },
  components: {
    personCom,
    houseCom,
    carCom
  },
  methods: {
    save(){
      debugger;
      dialogFormVisible = true;
    },
    getSubPersonData(getData) {
      //这个data参数是用来接收子组件数据的，接收personCom
      console.log("我是parent,接收 人险 数据");
      this.parentData[0] = getData;
    },
    getSubHouseData(getData) {
      console.log("我是parent，接收 房险 数据");
      this.parentData[1] = getData;
    },
    getSubCarData(getData) {
      console.log("我是parent，接收 车险 数据");
      this.parentData[2] = getData;
    }
  }
};
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .toubaoPerson{
    border: 1px solid red;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;

  }
  #toubaoPersonInput {
    /* 解决此div高度塌陷问题 */
    overflow:hidden; 
    padding: 20px;
    border-bottom: 2px solid rgb(237,239,241);

  }
  .tabsDiv {
    margin-top: 10px;
    padding: 20px;
    margin-bottom: 40px;
  }
  #span1 {
    text-align: left;
    float: left;
    height: 34px;
    width: 100px;
    line-height: 34px;
  }
  .el-input__inner{
    height: 34px;
    float: left;   
    width: 80%;
  }
  .el-button{
    float: right;
    margin-top: 10px;
  }
</style>