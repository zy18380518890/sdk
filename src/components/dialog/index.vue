<template>
  <div class="dialogContainer">
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <!-- <span>这是一段信息</span> -->
      <el-form :model="form">
        <el-form-item>
          <el-input
            placeholder="请输入内容"
            type="textarea"
            :rows="8"
            v-model="form.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >提交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
      title:String,
    dialogVisible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        desc: "",
      },
    };
  },
  methods: {
    handleCancel() {
      this.$emit("handleDel", false);
    },
  },
};
</script>
<style scoped>
</style>