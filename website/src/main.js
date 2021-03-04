import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false

//定义事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
