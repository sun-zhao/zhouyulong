<template>
  <div class="exhibitionInfo">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.index">
        <p class="font28 HYQiHeiX2"><a :href="item.link">{{ item.title }}</a></p>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next" id="swiper-news-left" @click="next"></div>
    <div class="swiper-button-prev" id="swiper-news-right" @click="prev"></div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: "newsRightSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      list: [
        {
          'title': '2020集美·阿尔勒国际摄影节，发现奖单元《艳阳高照》。',
          'link': 'baidu.com',
        },
        {
          'title': '2222最新作品|《1934》 © 2020',
          'link': 'baidu.com',
        }
      ],
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
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
    }

  }
}
</script>
