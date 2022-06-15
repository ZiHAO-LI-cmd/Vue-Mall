// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true },
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true },
            name: "search",
            // 路由组件传递props数据
            // 布尔值写法:只能传params参数
            // props: true,    
            // 对象写法，额外的给路由组件传递一些props
            // props: {           
            //     a:1,
            //     b:2
            // }
            // 函数写法，可以传递params,query参数
            props: ($route) => {
                return { keyword: $route.params.keyword, k: $route.query.k }
            }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false },
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false },
        },
        // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: "/home"
        }
    ]
})