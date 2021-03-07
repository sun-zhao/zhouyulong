<template>
  <div class="layout" id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // 滚动条的高度
      scrollTop: 0,
      domItems: ['news', 'works', 'infos', 'publication', 'database', 'about'],
      domItemsTop: []
    }
  },
  methods: {

  },

  mounted() {

  },

  destroyed() {

  }
}
</script>

<style>
@import "assets/font/fonts.css";
@import "assets/css/swiper.min.css";
@import "assets/css/styles.css";
</style>
