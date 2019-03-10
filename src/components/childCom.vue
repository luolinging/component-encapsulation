<template>
  <div class="child">
    <h4>我是子组件</h4>
    <el-button type="primary" @click="showParentProps">显示从父组件中获取的数据</el-button>
    <el-button type="primary" @click="showParentShow">子组件获取父组件的方法，并向父组件传递数据</el-button>
    <el-button type="primary" @click="send">自身发送ajax请求</el-button>

    <el-table class="table" :data="tableData" border>
      <el-table-column prop="date" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "childCom",
  data() {
    return {
      count: 10,
      sonMsg: { id: "001", name: "小头儿子" },
      tableData: null
    };
  },
  /**
   * props: 用这个属性接收父组件中的数据
   * 把父组件传递过来的parentProps先在子组件的props中定义一下才可以使用父组件中的数据
   */
  props: ["parentProps"],
  methods: {
    showParentProps() {
      var sum = this.parentProps * this.count++;
      console.log(sum);
    },
    /**
     * 用$emit接收父组件的方法，并给父组件传递一个参数
     * parentEvent:父组件的方法名
     * this.sonMsg:给父组件传递的参数
     */
    showParentShow() {
      this.$emit("parentEvent", this.sonMsg);
    },
    send() {
      this.axios
        .get("parent-child.json")
        .then(res => {
          this.dataList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.child {
  margin: 0 auto;
  border: 2px solid blue;
  border-radius: 10px;
  width: 95%;
}
.table {
  margin: 0 auto;
  margin-top: 20px;
  width: 85%;
}
</style>
