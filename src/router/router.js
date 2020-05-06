import App from "@/App";

const index = () => import('../view/index');
const notFound = () => import('../view/notFound');
const blog = () => import('../view/blog');
const tag = () => import('../view/tag');
const category = () => import('../view/category');
const admin = () => import('../view/admin/admin');
const login = () => import('../view/admin/login');
const adminBlog = () => import('../components/admin/blog');
const adminBlogEditor = () => import('../components/admin/editor')
const adminUser = () => import('../components/admin/user');
const adminLog = () => import('../components/admin/log');
const adminTag = () => import('../components/admin/tag');

const adminCategory = () => import('../components/admin/category');
const error = () => import('../view/error');

export default [{
    path: '',
    component: App,
    children: [
        {path: '/', component: index, meta: {title: '首页'}},
        {path: '/blog/:blogId', name: 'blog', component: blog, meta: {title: '文章详情'}},
        {path: '/tag/:tag', component: tag, meta: {title: '标签详情'}},
        {path: '/category/:category', component: category, meta: {title: '类别详情'}},
        {
            path: '/tmcaibudao/admin', component: admin, meta: {title: '后台管理'}, children: [
                {path: 'blog', component: adminBlog, meta: {title: '编辑文章'}},
                {path: 'blog/editor', component: adminBlogEditor, meta: {title: '编辑文章'}},
                {path: 'user', component: adminUser, meta: {title: '用户管理'}},
                {path: 'log', component: adminLog, meta: {title: '日志管理'}},
                {path: 'tag', component: adminTag, meta: {title: '标签管理'}},
                {path: 'category', component: adminCategory, meta: {title: '类别管理'}}
            ],
        },
        {path: '/tmcaibudao/login', component: login, meta: {title: '登录'}},
        {path: '/error', component: error, meta: {title: '500'}},
        {path: '/*', component: notFound, meta: {title: '404'}}
    ]
}]
