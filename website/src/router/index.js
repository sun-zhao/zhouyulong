import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const home = () => import('@/views/home/home')
const database = () => import('@/views/database/database')
const workdetails = () => import('@/views/workdetails/workdetails')
const newsDetail = () => import('@/views/newsDetail/newsDetail')
const list = () => import('@/views/list/list')
const results = () => import('@/views/results/results')
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
                title: 'ZHOU YULONG',
                keepAlive: true
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
            path: '/workdetails',
            name: 'workdetails',
            component: workdetails,
            meta: {
                title: '作品详情'
            }
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: newsDetail,
            meta: {
                title: '新闻详情'
            }
        },
        {
            path: '/list',
            name: 'list',
            component: list,
            meta: {
                title: '列表'
            }
        },
        {
            path: '/results',
            name: 'results',
            component: results,
            meta: {
                title: '搜索结果'
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
    window.scrollTo(0,0)
})
export default router
