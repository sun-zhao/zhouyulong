import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)
const store = new Vuex.Store({
    state: {
        isEnglish: JSON.parse(localStorage.getItem('isEnglish')) || false
    },
    getters: {
        isEnglish: state => state.isEnglish
    },
    mutations: {
        changeCN(state) {
            state.isEnglish = false
            localStorage.setItem('isEnglish',JSON.stringify(state.isEnglish))
        },
        changeEN(state) {
            state.isEnglish = true
            localStorage.setItem('isEnglish',JSON.stringify(state.isEnglish))
        }
    },
    actions: {},
    modules: {}
})

export default store
