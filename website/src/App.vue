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
        <a v-for="(item,index) in navsEn"
           :key="index"
           :data-id="index"
           @click="clickTab(index)">{{ item }}</a>
      </div>
      <div class="search-box fr">
        <input type="search">
        <span>
        <em>中文</em>
        <em>|</em>
        <em>English</em>
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

export default {
  name: 'App',
  components: {
    // Header,
    Footer
  },
  data() {
    return {
      isEnglish: this.GLOBAL.isEnglish,
      logUrl: '/assets/img/logo.png',
      navs: ['新闻', '作品', '展览', '出版物', '资料库', '关于'],
      navsEn: ['News', 'Works', 'Exhibitions', 'Publications', 'Database', 'About'],
      active: 0
    }
  },
  methods: {
    clickTab(index) {
      this.$router.push({name: 'home'})
      this.active = index
    },
    goHome() {
      this.$router.push({name: 'home'})
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
