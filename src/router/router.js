import App from "@/App";

const index = () => import('../view/index');
const test = () => import('../view/test');
const notFound = () => import('../view/notFound');
const blog = () => import('../view/blog');
const tag = () => import('../view/tag');
const category = () => import('../view/category');
const admin = () => import('../view/admin/admin');
const adminBlog = ()=>import('../components/admin/editor');
const error =()=>import('../view/error');

export default [{
    path: '',
    component: App,
    children: [
        {path: '/', component: index, meta: {title: '首页'}},
        {path: '/test', component: test, meta: {title: '测试'}},
        {path: '/blog/:blogId', name: 'blog', component: blog, meta: {title: '文章详情'}},
        {path: '/tag/:tag', component: tag, meta: {title: '标签详情'}},
        {path: '/category/:category', component: category, meta: {title: '类别详情'}},
        {
            path: '/tmcaibudao/admin', component: admin, meta: {title: '后台管理'}, children: [
                {path: 'blog', component: adminBlog, meta:{title:'编辑文章'}}
            ]
        },
        {path:'/error', component: error, meta:{title: '500'}},
        {path: '/*', component: notFound, meta: {title: '404'}}
    ]
}]
