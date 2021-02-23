export const formOptions = {
  operationType: {
    label: '操作类型',
    type: 'select',
    name: 'applyType',
    span: 10,
    placeholder: '全部类型',
    style:{width:'200px',marginRight:'20px',},
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
      },
      {
        label:'审批',
        value:'examine'
    },
    ]
},
organization: {
  label: '机构选择',
  type: 'select',
  name: 'organization',
  placeholder: '请选择',
  style:{width:'200px',marginRight:'20px'},
  option: [
      {
          label:'全部机构',
          value:'all'
      },
      {
          label:'环境局',
          value:'environment'
      },
    //   {
    //     label:'税务局',
    //     value:'tax'
    // },
      {
          label:'财政局',
          value:'financial'
      }
  ]
},
operationResult: {
  label: '操作结果',
  type: 'select',
  name: 'organization',
  placeholder: '请选择',
  style:{width:'200px',marginRight:'20px'},
  option: [
      {
          label:'全部结果',
          value:'all'
      },
      {
          label:'成功',
          value:'succeed'
      },
      {
        label:'失败',
        value:'fail'
    },
  ]
},
operationTime: {
  label: '操作日期',
  type: 'Data',
  name: 'time',
  placeholder: '请选择上传时间',
  // width:'254px'
}
     
}

export const columns = [
    {
        label: '操作类型',
        prop: 'operationType',
        key: 'operationType',
        fixed: 'left',
        // width:'200px'
        // scopedSlots: { customRender: 'linkRender' }
      },
    //   {
    //       label: 'SDK类型',
    //       dataIndex: 'type',
    //       key: 'type',
    //     //   width: '150px',
    //   },
      {
          label: '操作人',
          prop: 'operationPerson',
          key: 'operationPerson',
        //   width: '150px',
      },
      {
          label: '机构',
          prop: 'organization',
          key: 'organization',
        //   width: '150px',
      },
      {
          label: '操作时间',
          prop: 'operationTime',
          key: 'operationTime',
          width: '180px',
      },
      {
          label: 'IP',
          prop: 'ip',
          key: 'ip',
          width: '180px',
      },
    //   {
    //     label: '申请文档',
    //     prop: 'applyWord',
    //     key: 'applyWord',
    // },
    {
      label: '详细信息',
      prop: 'information',
      key: 'information',
      width: '180px',
  },
  {
    label: '操作结果',
    prop: 'operationResult',
    key: 'operationResult',
  //   width: '150px',
},
]