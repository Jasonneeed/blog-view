import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import routes from './router/router.js'
import VueRouter from 'vue-router'
import 'default-passive-events'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
});
//全局路由守卫，包含设置标题，以及接口鉴权
router.beforeEach((to, from, next)=>{
    if(to.meta.authentication){
        let token = localStorage.getItem('token');
        if(token === undefined || token === null){
            alert('访问受限，请登录');
            // next({path:'/tmcaibudao/login'});
        }
    }
    if(to.params.title){
        document.title = to.params.title;
    }else if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

