import App from "@/App";

const index = () => import('../view/index')
const test = () => import('../view/test')
const notFound = () => import('../view/notFound')
const blog = () => import('../view/blog')
const tag = () => import('../view/tag')
const category = () => import('../view/category')
const admin = () => import('../view/admin/admin')
const blogAdmin = () => import('../view/admin/blog-admin')

export default [{
    path: '',
    component: App,
    children: [
        {path: '/', component:index, meta:{title: '首页'}},
        {path: '/test', component: test, meta: {title: '测试'}},
        {path: '/blog/:blogId', name: 'blog', component: blog, meta: {title: '文章详情'}},
        {path: '/tag/:tag', component: tag, meta: {title: '标签详情'}},
        {path: '/category/:category', component: category, meta: {title: '类别详情'}},
        {path: '/tmcaibudao/admin', component: admin, meta: {title: '后台管理'}},
        {path: '/tmcaibudao/admin/blog', component: blogAdmin, meta:{title:'文章管理'}},
        {path: '/*', component: notFound, meta: {title: '404'}}
    ]
}]
