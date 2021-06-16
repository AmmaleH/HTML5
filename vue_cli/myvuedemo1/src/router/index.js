import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import Login from '../views/Login'
import Home from '../views/Home'
import Productslist from '../views/Productslist'
import Productsinfo from '../views/Productsinfo'

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
    routes: [
        {
            // 路由路径
            path: '/Login',
            // 路由名称
            name: 'Login',
            // 跳转到组件
            component: Login
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/Productslist',
                    name: 'Productslist',
                    component: Productslist
                },
                {
                    path: '/Productsinfo',
                    name: 'Productsinfo',
                    component: Productsinfo
                }
            ]
        },
        {
            path: '/Gologin',
            redirect: '/Login'
        }
    ]
});