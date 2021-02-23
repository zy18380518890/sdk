<template>
  <div class="app-container">aaa
    <div class="eamaineSearch">
      <SearchLayout
        :formOptions="formOptions"
        :isRadio="isRadio"
        :isShow="isShow"
      />
      <div class="exmainebtn">
        <el-button>批量通过</el-button>
        <el-button>批量拒绝</el-button>
      </div>
    </div>
    <div class="exmaineTable">
      <Table
        :columns="columns"
        :list="list"
        :operates="operates"
        :options="options"
        @handleSelectionChange="handleSelectionChange"
      />
      <div class="pagination-container">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="listQuery.page"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="listQuery.limit"
          layout="prev, pager, next, sizes, jumper, total"
          :total="total"
        >
        </el-pagination>
      </div>
      <Dialog :title="title" :dialogVisible="dialogVisible"/>
    </div>
  </div>
</template>

<script>
import SearchLayout from "../SearchLayout";
import Table from "../Table";
import Dialog from "../dialog"
import { formOptions, columns } from "./tree1";
export default {
  name: "examineManager",
  components: { SearchLayout, Table, Dialog },
  data() {
    return {
      formOptions,
      columns,
      isShow: false,
      isRadio:true,
      dialogVisible: false,
      title:'拒绝原因',
      total: "",
      list: [
        {
          name:'aaaa',
          fileSize: 'IPHONE',
          sdkType:'上传SDK',
          sdkOrganization:'水利局',
          applyOrganization:'水利机构',
          applyType:'下载sdk',
          applyTime:'2021-2-22 09:30:30',
          applyWord:'下载文档',
          finishTime:'2020-1-1 13:00:00',
          applyStatus:'审批中',
          status:'审批通过'
        },
        {
          name:'aaaa',
          fileSize: 'IPHONE',
          sdkType:'上传SDK',
          sdkOrganization:'水利局',
          applyOrganization:'水利机构',
          applyType:'下载sdk',
          applyTime:'2021-2-22',
          applyWord:'下载文档',
          finishTime:'2020-1-1',
          applyStatus:'审批中',
          status:'审批通过'
        },
      ],
      listQuery: {
        page: 1,
        limit: 10,
        systemname: undefined,
      },
      options: {
        loading: false,
        mutiSelect: true, // 是否是支持表选中功能
      },
      operates: {
        width: 150,
        list: [
          {
            id: "1",
            label: "通过",
            style: "cursor:pointer;color: #409eff;",
            show: true,
            // class: "el-icon-edit",
            plain: true,
            method: (scope, row) => {
              console.log(scope);
              console.log(row);
              this.handleEdit(row);
            },
          },
          {
            id: "2",
            label: "拒绝",
            style: "cursor:pointer;color: #ED7F58;",
            // class: "el-icon-delete",
            show: true,
            plain: false,
            method: (index, row) => {
              this.handleDel(row);
            },
          },
        ],
      }, // 列操作按钮
    };
  },
  computed: {
    
  },
  created() {
    // Mock: get all routes and roles list from server
    
  },
  mounted() {
    console.log(this.formOptions,'====formOPtions')
    console.log(this.dialogVisible,'====dialogVisible')

  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    // 删除
    handleDel(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
      this.dialogVisible = row;
      console.log(this.dialogVisible,'====dialogVisible')
    },
    // 选中行
    handleSelectionChange(val) {
      console.log("val:", val);
    },
    handleSizeChange(val) {
      console.log(val);
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      console.log(val);
      this.listQuery.page = val;
      this.getList();
    },
  },
};
</script>

<style  scoped>
.app-container{
  margin:3% 5%;
}
.eamaineSearch{
  display:flex;
  justify-content: right;
}
.exmaineTable{
  margin-top: 20px;
}
</style>
