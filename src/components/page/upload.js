export const formOptions = {
  type: {
    label: '申请类型',
    type: 'select',
    name: 'applyType',
    span: 10,
    placeholder: '全部类型',
    style:{width:'200px'},
    option: [
        {
            label:'全部类型',
            value:'all'
        },
        {
            label:'上传SDK',
            value:'uploadSDK'
        },
        {
            label:'下载SDK',
            value:'downloadSDK'
        },
        {
          label:'删除SDK',
          value:'deleteSDK'
      }
    ]
},
     
}

export const columns = [
    {
        label: 'SDK名称',
        prop: 'name',
        key: 'name',
        fixed: 'left',
        // width:'200px'
        // scopedSlots: { customRender: 'linkRender' }
      },
      {
          label: '申请类型',
          prop: 'applyType',
          key: 'applyType',
        //   width: '150px',
      },
      {
          label: 'SDK类型',
          prop: 'sdkType',
          key: 'sdkType',
        //   width: '150px',
      },
      {
          label: 'SDK所属机构',
          prop: 'sdkOrganization',
          key: 'sdkOrganization',
          width: '120px',
      },
      {
          label: '申请时间',
          prop: 'applyTime',
          key: 'applyTime',
          width: '180px',
      },
      {
        label: '申请文档',
        prop: 'applyWord',
        key: 'applyWord',
    },
    {
      label: '完成时间',
      prop: 'finishTime',
      key: 'finishTime',
      width: '180px',
  },
  {
    label: '申请状态',
    prop: 'applyStatus',
    key: 'applyStatus',
  //   width: '150px',
},
]