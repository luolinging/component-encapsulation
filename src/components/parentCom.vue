<template>
  <div class="parent">
    <h3>我是父组件</h3>
    <child :parentProps="msg" @parentEvent="showParentEvent"></child>
    <p>{{parentData}} </p>
  </div>
</template>

<script>
import child from "@/components/childCom";
export default {
  name: "parentCom",
  data() {
    return {
      msg: 1,
      parentData: null  //设置一个空对象，用于渲染从子组件接收到的数据
    };
  },
  components: {
    child
  },
  methods: {
    showParentEvent(data) {
      console.log("我是父组件的方法");
      this.parentData=data;
    }
  }
};
</script>

<style scoped>
.parent{
  margin: 0 auto;
  border: 2px solid red;
  border-radius: 5px;
  width: 85%;
}
</style>
