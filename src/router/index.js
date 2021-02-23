import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: 'SDK文件列表' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '新增申请' }
                },
                {
                    // 富文本编辑器组件
                    path: '/tree2',
                    component: resolve => require(['../components/page/tree2.vue'], resolve),
                    meta: { title: '操作日志' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '我申请的' }   
                },
                {
                    // 图片上传组件
                    path: '/tree1',
                    component: resolve => require(['../components/page/tree1.vue'], resolve),
                    meta: { title: '我审批的' }   
                },
                // {
                //     // 权限页面
                //     path: '/permission',
                //     component: resolve => require(['../components/page/Permission.vue'], resolve),
                //     meta: { title: '权限测试', permission: true }
                // },
                // {
                //     path: '/404',
                //     component: resolve => require(['../components/page/404.vue'], resolve),
                //     meta: { title: '404' }
                // },
                // {
                //     path: '/403',
                //     component: resolve => require(['../components/page/403.vue'], resolve),
                //     meta: { title: '403' }
                // },
                // {
                //     path: '/admin',
                //     component: resolve => require(['../components/page/admin.vue'], resolve),
                //     meta: { title: '用户信息' }
                // },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
