import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import routes from './router/router.js'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next)=>{
    if(to.params.title){
        document.title = to.params.title;
    }else if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

