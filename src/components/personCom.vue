<template>
  <div class="personCom">
    <div class="beibaoPerson">
      <span id="span1">被保人姓名:</span>
      <!-- input回车事件 @keyup.enter  直接在el-input中添加keyup.enter是不起作用的 ，必须添加一个native,@keyup.enter.native-->
      <el-input v-model="personCom" placeholder="请输入被保人姓名"/>
    </div>
    <div class="spanMessage">
      <span id="span1">投保人姓名:</span>
      <span id="span1">{{this.parentMsg}}</span>
    </div>
    <!-- <el-button @click="transformDataToParent"> 将数据传递给父组件</el-button> -->
    <!-- <el-button @click="sendMsg"> 向houseMsg组件传值（传递数据）</el-button> -->
  </div>
</template>
<script>
//es6的方式引入外部js文件
import bus from '../assets/eventBus'
export default {
  name: "personCom",
  data() {
    return {
      personCom: ""
    };
  },
  props: [
    // 获取到了父组件中投保人信息
    "parentMsg"
  ],
  //利用updated方法，，有一个弊端，，就是只要页面有更新这个方法都会被触发，这样会造成CPU总是调用该方法
  updated() {
    this.$emit("parentEvent", this.personCom);
    bus.$emit('personEvent',this.personCom);
  }
  // methods: {
  //   // 通过emit向parentEvent这个绑定的事件传递personCom
  //   // 缺陷：在input中输入数据后，想要将该数据传递给父组件，必须回车一下，此时该传送过程才开启
  //   // 怎么样，在输入数据后，点击父组件中的保存按钮就进行子向父的传参呢？？？？
  //   // transformDataToParent(){
  //   //   // debugger
  //   //   this.$emit('parentEvent',this.personCom);
  //   // }
  //   sendMsg(){
  //     //this.Bus.$emit('自定义事件名',data)
  //     // Bus.$emit('personEvent',this.personCom);
  //     bus.$emit('personEvent',this.personCom);
  //   }
  // }
};
</script>
<style>
.beibaoPerson {
  overflow: hidden;
}
.spanMessage {
  overflow: hidden;
}
#span1{
  text-align: left;
  float: left;
  height: 34px;
  width: 100px;
  line-height: 34px;
}
.el-input {
  float: left;
  height: 34px;
  width: 80%;
}
</style>