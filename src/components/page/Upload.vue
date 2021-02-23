<template>
  <div class="app-container">
    <div class="apply-container">
    <div class="addApply">
      <el-button type="primary">新增申请</el-button>
    </div>
    <div class="applyType">
      <SearchLayout
        :formOptions="formOptions"
        @onSearch="onSearch"
        :isShow="isShow"
      />
      <div class="examineBtn">
        <el-button-group>
          <el-button type="primary">全部</el-button>
          <el-button type="primary">审批中</el-button>
          <el-button type="primary">审批通过</el-button>
          <el-button type="primary">审批拒绝</el-button>
        </el-button-group>
      </div>
    </div>
    </div>
    <div class="applyTable">
    <Table
        :columns="columns"
        :list="list"
        :operates="operates"
        :options="options"
        @handleSelectionChange="handleSelectionChange"
      />
    <div class="pagination-apply">
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
    </div>
  </div>
</template>

<script>
import SearchLayout from "../SearchLayout";
import Table from "../Table";
import { formOptions, columns } from "./upload";
export default {
  name: "DirectivePermission",
  components: { SearchLayout, Table },
  data() {
    return {
      formOptions,
      columns,
      isShow: false,
      list: [
        {
          name:'aaaa',
          applyType: '10M',
          sdkType:'上传SDK',
          sdkOrganization:'水利局',
          applyTime:'2021-2-22 09：00：00',
          description: 'ok',
          applyWord:'下载文档',
          finishTime:'2020-1-1',
          applyStatus:'审批中'
        },
        {
          name:'aaaa',
          applyType: '10M',
          sdkType:'上传SDK',
          sdkOrganization:'水利局',
          applyTime:'2021-2-22 12：00：00',
          description: 'ok',
          applyWord:'下载文档',
          finishTime:'2020-1-1',
          applyStatus:'审批中'
        },
      ],
      options: {
        loading: false,
        mutiSelect: false, // 是否是支持表选中功能
      },
      listQuery: {
        page: 1,
        limit: 10,
        systemname: undefined,
      },
      operates: {
        width: 150,
        list: [
          {
            id: "1",
            label: "查看",
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
            label: "下载",
            style: "cursor:pointer;color: #b3450e;",
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
  mounted() {
    console.log(this.formOptions, "===formOptions");
    console.log(this.columns, "===columns");

  },
  methods: {
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

<style scoped>
.app-container { 
  margin: 3% 5%;
}
.apply-container{
  display: flex;
  justify-content: space-between;
}
.applyType {
  display: flex;
  /* justify-content: right; */
}
.applyTable{
  margin-top:20px;
}
.pagination-apply{
  margin-top:20px;
}
</style>

