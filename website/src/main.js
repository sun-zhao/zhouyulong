import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, {Autoplay} from 'swiper';
import vuePhotoPreview from "vue-photo-preview/src/lib";
import 'vue-photo-preview/dist/skin.css'
import VueCookies from 'vue-cookies'
import 'default-passive-events'
import store from "@/store/store";
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo, {
    container: "body",
    duration: 200,
    easing: 'ease-out',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
// Vue.use(Lazy, {
//     preloadImages: false,
//     lazy: {
//         loadPrevNext: true,
//     },
//     loadOnTransitionStart: false,
//     watchSlidesVisibility: true, //解决了swiper前面的一个不能提前加载的bug
// })
Vue.use(VueVideoPlayer);
Vue.use(VueCookies)

Vue.use(vuePhotoPreview)
SwiperCore.use([Autoplay]);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.prototype.$store = store
//定义事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
