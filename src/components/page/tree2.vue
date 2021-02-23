<template>
  <div class="tab-container">
    <SearchLayout :formOptions="formOptions" :isShow="isShow"/>
    <div class="tabTable">
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
    </div>
  </div>
</template>

<script>
import SearchLayout from "../SearchLayout";
import Table from "../Table";
import { formOptions, columns } from "./tree2";

export default {
  name: 'Tab',
  components: { SearchLayout, Table },
  data() {
    return {
     formOptions,
     columns,
     isShow:true,
     total: "",
      list: [
        {
          operationType:'上传',
          operationPerson: '张晓刚',
          organization:'默认机构',
          operationTime:'2020-2-22  08:00:00',
          ip:'182.150.117.234',
          information:'申请上传文件sdkxx',
          operationResult:'成功',
        },
        {
          operationType:'下载',
          operationPerson: '张晓刚',
          organization:'默认机构',
          operationTime:'2020-2-22  08:00:00',
          ip:'182.150.117.234',
          information:'申请上传文件sdkxx',
          operationResult:'失败',
        },
      ],
      
      listQuery: {
        page: 1,
        limit: 10,
        systemname: undefined,
      },
      options: {
        loading: false,
        mutiSelect: false, // 是否是支持表选中功能
      },
      operates: {
        width: 150,
        list: [
          {
            id: "1",
            label: "编辑",
            style: "cursor:pointer;color: #409eff;",
            show: false,
            class: "el-icon-edit",
            plain: true,
            method: (scope, row) => {
              console.log(scope);
              console.log(row);
              this.handleEdit(row);
            },
          },
          {
            id: "2",
            label: "删除",
            style: "cursor:pointer;color: #b3450e;",
            class: "el-icon-delete",
            show: false,
            plain: false,
            method: (index, row) => {
              this.handleDel(row);
            },
          },
        ],
      }, // 列操作按钮
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  mounted() {
    console.log(this.form,'form')
    console.log(this.formOptions,'===formOptions')
    console.log(this.columns,'===columns')

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
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 3% 5%;
  }
.tabTable{
  margin-top:20px;
}
</style>
