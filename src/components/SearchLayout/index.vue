<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="70px"
      :class="isRadio ? 'ruleForm' : 'demo-ruleForm'"
    >
      <el-form-item
        v-for="(item, index) in formOptions"
        :key="item.prop"
        :label="item.label"
        :rules="item.rules"
      >
        <el-input
          v-if="item.type === 'input'"
          :placeholder="item.placeholder"
          :style="item.style"
          v-model="ruleForm.pass"
          autocomplete="off"
          @change="selectedCag"
        ></el-input>
        <el-select
          v-if="item.type === 'select'"
          :placeholder="item.placeholder"
          :style="item.style"
          v-model="ruleForm.value"
          clearable
        >
          <el-option
            v-for="(val, index) in item.option"
            :key="val.value"
            :label="val.label"
            :value="val.value"
          ></el-option>
        </el-select>
        <el-date-picker
          v-if="item.type === 'Data'"
          v-model="ruleForm.value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <el-radio-group
          v-if="item.type === 'radio'"
          v-model="ruleForm.resource"
          :style="item.style"
        >
          <el-radio
            v-for="(val, index) in item.option"
            :key="index"
            :label="val.label"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <el-form-item label="所属机构" prop="region">
        <el-select placeholder="请选择" style="width: 254px">
          <el-option label="全部机构" value="shanghai"></el-option>
          <el-option label="环境局" value="beijing"></el-option>
          <el-option label="财政局" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="上传时间">
        <el-date-picker
        style="width: 300px"
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item> -->
      <el-form-item>
        <el-button v-if="isShow" type="primary" @click="submitForm('ruleForm')"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        value1: "",
        value:'',
        label:'',
        // region:'',
        resource: '',
      },
    };
  },
  props: {
    formOptions: {
      type: Object,
    //   require: true,
      default() {
        return {};
      },
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    isRadio:{
        type:Boolean,
        default:false,
    }
  },
  methods:{
      selectedCag(vId){
        console.log(vId)
        let obj = {};
         obj = this.ClaOptions.find((item)=>{  //这里的ClaOptions就是上面遍历的数据源
             return item.value === vId;  //筛选出匹配数据，这里的value是你遍历数组每一项的value，如果没有对后台返回的数据做处理，一般为id
         });
      console.log(obj.label);//  这里的label就是对应label的
      this.addCagLabel = obj.label  //打印出来的obj.label就是想要的label值

      },
  }
};
</script>
<style scoped>
.demo-ruleForm {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
.ruleForm {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>