import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            need: true
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue'),
        children:[{
            path:'/home/a',
            name:'A',
            component: () => import(/* webpackChunkName: "login" */ '../views/a.vue'),
        }],
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            need: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to, from);
    // return false
    let assToken = localStorage.getItem("assToken")
    let currentTime = new Date().getTime();
    console.log(to.fullPath.includes('redirectUrl'));
    console.log(router.query);
    if (to.meta.need) {
        if (assToken) {
            next()
            // 自己设置时间
            if (currentTime - 1000000 > 2636530418687) {
                next('/login')
            } else {
                setTimeout(() => {
                    if(to.fullPath.includes('redirectUrl')){
                        return false
                    }
                    next()  
                }, 5000);
            }
        } else {
            // todo 方案一
            next({
                path:'/login',
                query:{
                    //redirect可随意写比如 aa:to.fullPath
                    redirect: to.fullPath
                }
            })
            // todo 方案二
            // router.replace({
            //     path:"login",
            //     query: {redirect: to.fullPath}
            // })
            // todo 方案三
            // router.push({
            //     path:"login",
            //     query: {redirect: to.fullPath}
            // })

        }
    } else {
        setTimeout(() => {
            next() 
        }, 5000);
    }
})
router.afterEach((to,from,next)=>{
    console.log(to,from);
})

export default router
