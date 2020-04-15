import App from "@/App";

const index = () => import('../view/index')
const test = () => import('../view/test')
const notFound = () => import('../view/notFound')


export default [{
    path: '/',
    component: App,
    children: [
        {path: '', redirect: '/index'},
        {path: 'index', component: index},
        {path: 'test', component: test},
        {path: '*', component: notFound}
    ]
}]
