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
  examineType: {
    // label: '申请类型',
    type: 'radio',
    name: 'examine',
    span: 10,
    // placeholder: '全部类型',
    style:{display:'flex',},
    option: [
        {
            label:'全部',
            value:'all'
        },
        {
            label:'审批中',
            value:'examineLoad'
        },
        {
            label:'审评通过',
            value:'examinePass'
        },
        {
          label:'审批拒绝',
          value:'examineReject'
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
      //   {
      //       label: 'SDK类型',
      //       dataIndex: 'type',
      //       key: 'type',
      //     //   width: '150px',
      //   },
        {
            label: 'SDK类型',
            prop: 'fileSize',
            key: 'fileSize',
          //   width: '150px',
        },
        {
            label: 'SDK所属机构',
            prop: 'sdkOrganization',
            key: 'sdkOrganization',
            width: '120px',
        },
        {
            label: '申请机构',
            prop: 'applyOrganization',
            key: 'applyOrganization',
          //   width: '150px',
        },
        {
            label: '申请类型',
            prop: 'applyType',
            key: 'applyType',
          //   width: '150px',
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
      //   width: '150px',
    },
    {
      label: '状态',
      prop: 'status',
      key: 'status',
    //   width: '150px',
  },
  {
    label: '完成时间',
    prop: 'finishTime',
    key: 'finishTime',
    width: '180px',
},
// {
//     label: '状态',
//     prop: 'description',
//     key: 'description',
//   //   width: '150px',
// },
  ]