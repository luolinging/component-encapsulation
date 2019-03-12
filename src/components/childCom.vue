<template>
  <div class="child">
    <h4>我是子组件</h4>
    <!-- <el-button type="primary" @click="showParentProps">显示从父组件中获取的数据</el-button> -->
    <!-- <el-button type="primary" @click="showParentShow">子组件获取父组件的方法，并向父组件传递数据</el-button> -->
    <!-- <el-button type="primary" @click="send">自身发送ajax请求</el-button> -->
    <div class="table">
      <el-table :data="tableData" border highlight-current-row>
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="pageInfo.currentPage"
        :page-size="pageInfo.pageSize"
        :total="18"
        layout="total, prev, pager, next"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "childCom",
  /**
   * @description:
   * tableData:   绑定的给表格填充的数据
   * currentPage: 当前页数
   * pageSize:    每页显示条目个数
   * pageInfo:    一个封装pageSize和currentPage的对象
   * @return:
   */
  data() {
    return {
      // count: 10,
      // sonMsg: { id: "001", name: "小头儿子" },
      tableData: null,
      pageInfo: {
        currentPage: 1,
        pageSize: 5
      }
    };
  },
  /**
   * props: 用这个属性接收父组件中的数据
   * 把父组件传递过来的parentProps先在子组件的props中定义一下才可以使用父组件中的数据
   * tableParentUrl:从父组件中传递过来的url
   */

  props: ["parentProps", "tableParentUrl"],
  created() {
    /**
     * 这是通过props接收的父组件的参数tableParent(它是一个url地址)，从而获取的json数据
     * 即：从外部接收json文件
     */
    this.loadData(this.tableParentUrl, {
      params: {
        id: "001"
      }
    });
  },

  methods: {
    loadData(url, data) {
      this.axios
        .get(url, data)
        .then(res => {
          this.tableData = res.data.tableData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @description 目的：请求第n页数据
     * @param {currentpage:传递当前点击的第几页这个参数}
     * @return 返回请求的数据
     */
    handleCurrentChange(currentpage) {
      var _this = this;
      debugger;
      console.log(currentpage);
      //A发送ajax get/post url 参数
      //B原来的参数
      //C页码信息  页号n  每页的条数
      this.loadData(_this.tableParentUrl, {
        params: {
          id: "001",
          pageInfo: {
            currentpage,
            pageSize
          }
        }
      });
    }
    // showParentProps() {
    //   var sum = this.parentProps * this.count++;
    //   console.log(sum);
    // },
    /**
     * 用$emit接收父组件的方法，并给父组件传递一个参数
     * parentEvent:父组件的方法名
     * this.sonMsg:给父组件传递的参数
     */
    // showParentShow() {
    //   this.$emit("parentEvent", this.sonMsg);
    // }
    /**
     * 这个方法是child这个组件自身发送ajax请求数据
     * http://localhost:8080/static/parent-child.json
     * 或者 static//parent-child.json---相对路径
     */
    // send() {
    //   var _this = this;
    //   this.axios
    //     .get("static//parent-child.json")
    //     .then(res => {
    //       // debugger;
    //       _this.tableData = res.data.tableData;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
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
.pagination {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
