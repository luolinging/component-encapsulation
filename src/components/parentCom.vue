<template>
  <div class="parent">
    <h3>我是父组件</h3>
    <child :parentProps="msg" :tableParentUrl="tableParent" @parentEvent="showParentEvent"></child>
    
    <!-- <el-button type="primary" @click="sendUrl">向子组件发送从ajax中获取的数据</el-button> -->
    <!-- <p>{{parentData}}</p> -->
  </div>
</template>

<script>
import child from "@/components/childCom";
export default {
  name: "parentCom",
  data() {
    return {
      msg: 1,
      parentData: null, //设置一个空对象，用于渲染从子组件接收到的数据
      tableParent: "static/parent-child.json"
    };
  },
  components: {
    child
  },
  created() {
    /**这个是通过获取json文件的地址，
     * 通过向子组件只传递url地址，
     * 达到子组件从url中获取的数据的方式 
     */
    // debugger;
    // var parentUrl = this.axios.get("static//parent-child.json");
    // debugger;
    // console.log("parentUrl");
    // this.tableParent = parentUrl;
  },
  methods: {
    /**这是像子组件传递一个方法
     * 带有的参数:data
     * 子组件会通过$emit()传参的样式给父组件传递参数
     * 这个过程也就成为  子->父  通信
     */
    showParentEvent(data) {
      console.log("我是父组件的方法");
      this.parentData = data;
    }
    /**
     * 这个是通过先获取ajax中的数据，
     * 再绑定给子组件，然后通过props获取之后，子组件得到的json数据
     */
    // sendUrl() {
    //   var _this = this;
    //   this.axios
    //     .get("static//parent-child.json")
    //     .then(res => {
    //       debugger;
    //       _this.tableParent = res.data.tableData;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style scoped>
.parent {
  margin: 0 auto;
  border: 2px solid red;
  border-radius: 5px;
  width: 85%;
}
</style>
