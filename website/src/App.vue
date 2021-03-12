<template>
  <div class="layout" id="app">
    <div class="header HYXiDengXianJ clearfix">
      <span class="fl logo" @click="goHome"><img src='./assets/img/logo.png'></span>
      <div v-if="!isEnglish" class="fl header-nav clearfix">
        <a :href="'#link' + index" v-for="(item,index) in navs"
           :class="{active: active == index}"
           :key="index"
           @click="clickTab(index)"
           :data-id="index">{{ item }}</a>
      </div>
      <div v-else class="fl header-nav clearfix">
        <a :href="'#link' + index" v-for="(item,index) in navsEn"
           :class="{active: active == index}"
           :key="index"
           :data-id="index"
           @click="clickTab(index)">{{ item }}</a>
      </div>
      <div class="search-box fr">
        <input type="search" @keyup.enter="getSearch" ref="searchInput">
        <span>
        <em @click="changeCN">中文</em>
        <em>|</em>
        <em @click="changeEN">English</em>
      </span>
      </div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
// import Header from "@/components/header/header"
import Footer from "@/components/footer/footer";
import {search} from '@/utils/utils'

export default {
  name: 'App',
  components: {
    // Header,
    Footer
  },
  computed: {
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  data() {
    return {
      logUrl: '/assets/img/logo.png',
      navs: ['新闻', '作品', '展览', '出版物', '资料库', '关于'],
      navsEn: ['News', 'Works', 'Exhibitions', 'Publications', 'Database', 'About'],
      active: 0
    }
  },
  created() {

  },
  methods: {
    clickTab(index) {
      this.$router.push({name: 'home'})
      this.active = index
    },
    goHome() {
      this.$router.push({name: 'home'})
    },
    changeCN() {
      // this.$cookies.set("isEnglish", "false", "0");
      this.$store.commit('changeCN')
    },
    changeEN() {
      this.$store.commit('changeEN')
    },
    getSearch() {
      let key = this.$refs.searchInput.value
      search(key).then(res => {
        console.log(res.data)
        this.$store.state.results = res.data
      })
      this.$router.push({name: "results"})
    }
  }
}
</script>

<style>
@import "assets/font/fonts.css";
@import "assets/css/animate.compat.css";
@import "assets/css/swiper.min.css";
@import "assets/css/styles.css";
</style>
