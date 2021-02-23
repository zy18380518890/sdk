export const formOptions = {
    name: {
        label: 'SDK名称',
        type: 'input',
        name: 'name',
        span: 10,
        placeholder: '请输入',
        style:{width:'200px',marginRight:'20px'}
      },
      organization: {
        label: '所属机构',
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
            {
                label:'财政局',
                value:'financial'
            }
        ]
    },
    type: {
        label: 'SDK类型',
        type: 'select',
        name: 'type',
        span: 10,
        placeholder: '全部类型',
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
            {
                label:'财政局',
                value:'financial'
            }
        ]
    },
    time: {
        label: '上传时间',
        type: 'Data',
        name: 'time',
        placeholder: '请选择上传时间',
        // width:'254px'
    }
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
          label: '文件大小',
          prop: 'fileSize',
          key: 'fileSize',
        //   width: '150px',
      },
      {
          label: '所属机构',
          prop: 'organization',
          key: 'organization',
        //   width: '150px',
      },
      {
          label: '上传时间',
          prop: 'time',
          key: 'time',
        //   width: '150px',
      },
      {
          label: 'SDK说明',
          prop: 'description',
          key: 'description',
        //   width: '150px',
      },
      {
        label: 'SDK文档下载',
        prop: 'downLoad',
        key: 'downLoad',
      //   width: '150px',
    },
    //   {
    //       label: '操作',
    //       prop: 'operation',
    //       fixed: 'right',
    //     //   width: '200px',
    //       scopedSlots: { customRender: 'operation' }
    //   }
]