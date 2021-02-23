<template>
  <div class="dashboard-container">
    <!-- aaaaaaaaa -->
    <!-- <SearchLayout :formOptions="formOptions" @onSearch="onSearch" /> -->
    <SearchLayout
      :formOptions="formOptions"
      @onSearch="onSearch"
      :isShow="isShow"
    />
    <div class="tableContainer">
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
import { formOptions, columns } from "./dashboard";
import SearchLayout from "../SearchLayout/index";
import Table from "../Table/index";
export default {
  name: "Dashboard",
  components: {
    SearchLayout,
    Table,
  },
  data() {
    return {
      isShow: true,
      columns,
      // serchData,
      formOptions,
      total: "",
      list: [
        {
          name:'aaaa',
          fileSize: '10M',
          organization:'水利局',
          time:'2021-2-22',
          description: 'ok',
          downLoad:'下载文档'
        },
        {
          name:'aaaa',
          fileSize: '10M',
          organization:'水利局',
          time:'2021-2-22',
          description: 'ok',
          downLoad:'下载文档'
        }
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
            label: "申请下载",
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
            label: "申请删除",
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
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    // 获取搜索表单提交的数据
    onSearch(val) {},
    // 选中行
    handleSelectionChange(val) {
      console.log("val:", val);
    },
    // 编辑
    handleEdit(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    // 删除
    handleDel(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },

    getList() {
      console.log(this.listQuery);
      page(this.listQuery).then((response) => {
        this.list = response.data.rows;
        this.total = response.data.total;
      });
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
.dashboard-container {
  margin: 3% 5%;
}
.pagination-container{
  margin-top: 20px;
}
.tableContainer{
  margin-top:20px;
}
</style>