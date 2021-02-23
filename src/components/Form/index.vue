<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="SDK名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="SDK上传" prop="region">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="large" type="primary">选择SDK</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="SDK文档" prop="desc">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="large" type="primary">选择SDK</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="SDK类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择SDK类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SDK说明" prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="申请文档" prop="desc">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="large" type="primary">选择SDK</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="系统选择" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择系统">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <a href="#" style="margin-left:10px;color:#1890FF;">没有系统？点这里注册</a>
      </el-form-item>
      <el-form-item label="应用选择" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择应用">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <a href="#" style="margin-left:10px;color:#1890FF;">没有应用？点这里注册</a>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入SDK名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择SDK类型", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写SDK说明", trigger: "blur" }],
      },

    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  },
};
</script>
<style scoped>
</style>