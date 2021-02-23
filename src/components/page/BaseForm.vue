<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>新增申请</span>
        <i
          style="float: right; font-size: 20px; color: #1890ff"
          class="el-icon-back"
        ></i>
      </div>
      <div class="applyContent">
        <span class="applyType">申请类型</span>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="上传SDK文件" name="first">
            <Form />
          </el-tab-pane>
          <el-tab-pane label="下载SDK文件" name="second">下载SDK文件</el-tab-pane>
          <el-tab-pane label="删除SDK文件" name="third">删除SDK文件</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
import Form from "../Form";

export default {
  name: "PagePermission",
  components: { Form },
  data() {
    return {
      activeName: 'first',
    };
  },
  mounted() {
    console.log(this.radio, "====radio");
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: "/permission/index?" + +new Date() });
    },
  },
};
</script>
<style scoped>
.applyContent {
  display: flex;
  /* align-items: center; */
}
.applyType {
  font-size: 14px;
  margin-right: 20px;
  margin-top:15px;
}
</style>
