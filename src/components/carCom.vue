<template>
  <div class="carCom">
    <div class="chezhu">
      <span id="span1">车主姓名:</span>
      <el-input v-model="carCom"  placeholder="请输入车主姓名"/>
    </div>
    <div class="spanMessage">
      <span id="span1">投保人姓名:</span>
      <span id="span1">{{this.parentMsg}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "carCom",
  data() {
    return {
      carCom: ""
    };
  },
  props:[
      // 获取到了父组件中投保人信息
      'parentMsg'
  ],
  updated(){  
    this.$emit('parentEvent',this.carCom);
  }
  // methods:{
  //   transformDataToParent(){
  //     // debugger
  //     this.$emit('parentEvent',this.carCom);
  //   }
  // }
};
</script>
<style>
.chezhu{
  overflow: hidden;
}
</style>