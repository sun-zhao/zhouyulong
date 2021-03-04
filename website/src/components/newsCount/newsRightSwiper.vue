<template>
  <div class="newsRightSwiper">
    <swiper ref="mySwiper" v-if="latestArt.length > 1" :options="swiperOption">
      <swiper-slide v-for="item in latestArt" :key="item.index">
        <p><img :src="item.artworkImages"></p>
        <p class="title"><a class="link font14">{{ item.title }}</a></p>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next" id="swiper-news-left" @click="next"></div>
    <div class="swiper-button-prev" id="swiper-news-right" @click="prev"></div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import {getHomeData} from "@/utils/utils";

export default {
  name: "newsRightSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      latestArt: [],
      swiperOption: {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
        }
      }
    }
  },
  created() {
    this.getLastArtData()
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
    },
    //网络数据请求相关方法
    getLastArtData() {
      getHomeData().then(res => {
        this.latestArt = res.data.latestArt;
      })
    }

  }
}
</script>

<style scoped>
@import '../../assets/css/swiper.min.css'
</style>
