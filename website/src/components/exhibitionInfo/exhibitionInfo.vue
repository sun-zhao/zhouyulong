<template>
  <div class="exhibitionInfo">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in exhibitions" :key="item.index">
        <p class="font28 HYQiHeiX2"><a :href="item.url" target="_blank">{{!isEnglish ? item.title: item.titleEn}}</a></p>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next" id="swiper-news-left" @click="next"></div>
    <div class="swiper-button-prev" id="swiper-news-right" @click="prev"></div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import {getExhibition} from '@/utils/utils'
export default {
  name: "newsRightSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isEnglish: this.GLOBAL.isEnglish,
      exhibitions:{},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
        }
      }
    }
  },
  created() {
    this.getExhibition()
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
    },
    //  获取展讯
    getExhibition() {
      getExhibition().then(res => {
        this.exhibitions = res.data
      })
    }

  }
}
</script>
