import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, {Autoplay} from 'swiper';
import vuePhotoPreview from "vue-photo-preview/src/lib";
import 'vue-photo-preview/dist/skin.css'
import VueCookies from 'vue-cookies'
import store from "@/store/store";

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
