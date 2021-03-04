import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const home = () => import('@/views/home/home')
const database = () => import('@/views/database/database')
const workDetails = () => import('@/views/workDetails/workDetails')
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/database',
            name: 'database',
            component: database,
            meta: {
                title: '资料库'
            }
        },
        {
            path: '/workDetails',
            name: 'workDetails',
            component: workDetails,
            meta: {
                title: '作品详情'
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})
export default router
