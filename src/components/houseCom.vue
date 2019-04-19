<template>
  <div class="houseCom">
    <div class="fangzhu">
      <span id="span1">房主姓名:</span>
      <el-input v-model="houseCom" placeholder="请输入房主姓名"/>
    </div>
    <div class="spanMessage">
      <span id="span1">投保人姓名:</span>
      <span id="span1">{{this.parentMsg}}</span>
      <p>人险的被保人是：{{personComMsg}}</p>
    </div>
  </div>
</template>
<script>
import bus from "../assets/eventBus";
export default {
  name: "houseCom",
  data() {
    return {
      houseCom: "",
      personComMsg: ""
    };
  },
  mounted() {
    // 接收数据（监听自定义函数）   this.Bus.$on()报错，显示on未定义
    // this.Bus.$on('personEvent',(personComMsg)=>{
    //     this.personComMsg = personComMsg;
    // });
    bus.$on('personEvent',(personComMsg)=>{
        this.personComMsg = personComMsg;
    });
  },
  props: [
    // 获取到了父组件中投保人信息
    "parentMsg"
  ],
  updated() {
    this.$emit("parentEvent", this.houseCom);
  }

  // methods:{
  //   transformDataToParent(){
  //     // debugger
  //     this.$emit('parentEvent',this.houseCom);
  //   }
  // }
};
</script>
<style>
.fangzhu {
  overflow: hidden;
}
p {
  clear: left;
  text-align: left;
}
</style>