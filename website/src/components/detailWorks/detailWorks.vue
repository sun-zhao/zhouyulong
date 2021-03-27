<template>
  <div class="DetailWorks">
    <div class="swiper-works">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="item in works_details" :key="item.index">
          <p><img :src="item.url" :preview="preview" ></p>
<!--          :preview-text="item.title"-->
<!--          <p v-if="item.url"><img :src="item.url" :preview="preview" :preview-text="item.title"></p>-->
<!--          <p class="title text-left mart-20"><a class="link font14">{{ item.title }}</a></p>-->
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next" id="swiper-news-left" @click="next"></div>
      <div class="swiper-button-prev" id="swiper-news-right" @click="prev"></div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: "DetailWorks",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    works_details: {
      type: Array,
      default() {
        return []
      }
    },
    preview:{
      type: Number,
      default() {
        return 0
      }
    },
    previewText:{
      type:String,
      default(){
        return ''
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
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

  },
  computed:{
    isEnglish(){
      return this.$store.state.isEnglish
    }
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
    },
  }
}
</script>
<style scoped>
.swiper-slide img {
  object-fit: scale-down;
  height: 400px;
}

</style>
