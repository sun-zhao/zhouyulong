import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, {Autoplay} from 'swiper';
import global from '@/utils/utils';
import vuePhotoPreview from "vue-photo-preview/src/lib";
import 'vue-photo-preview/dist/skin.css'
import VueCookies from 'vue-cookies'
import Vuex from "vuex";

Vue.use(VueCookies)



Vue.use(vuePhotoPreview)
SwiperCore.use([Autoplay]);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global
//定义事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    render: h => h(App),
    Vuex,
    router
}).$mount('#app')
