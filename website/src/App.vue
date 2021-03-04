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
    //计算各个dom的offsetTop数值
    domItemsTopFun() {
      let itemsTop = []
      for (let i = 0; i < this.domItems.length; i++) {
        this.domItemsTop = itemsTop.push(document.getElementById(this.domItems[i]).offset().top)
      }
      return this.domItemsTop = itemsTop
    },
    // 保存滚动值，这是兼容的写法
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    // 滚动条回到顶部
    backTop() {
      if (this.scrollTop > 10) {
        document.documentElement.scrollTop = 0
      }
    }
  },

  mounted() {
    this.$nextTick(function () {
      // this.domItemsTopFun()
    })
    window.addEventListener('scroll', this.handleScroll, true)
  },

  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
@import "assets/font/fonts.css";
@import "assets/css/swiper.min.css";
@import "assets/css/styles.css";
</style>
