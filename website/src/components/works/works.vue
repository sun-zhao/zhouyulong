<template>
  <div class="works">
    <div class="nums-nav font20 Helvetica">
      <span v-for="(year,index) in years"
            :key="index"
            :class="{active:year  === currentYear}"
            @click="changeYear(year)">{{ year }}</span>
    </div>
    <div class="swiper-works">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="item in yearWorks" :key="item.index">
          <p @click="goWorkDetail(item.id)"><img :src="item.showImages[0]"></p>
          <p class="title link font14 mart-10">{{ !isEnglish ? item.title : item.titleEn }}</p>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next" id="swiper-news-left" @click="next"></div>
      <div class="swiper-button-prev" id="swiper-news-right" @click="prev"></div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import {getHomeData} from "@/utils/utils";

export default {
  name: "Works",
  components: {
    Swiper,
    SwiperSlide
  },
  props:{
    clickYear:{
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      years: [],
      currentYear:'',
      yearWorks: [],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 80,
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
        }
      }
    }
  },
  //计算属性
  computed: {
    isEnglish(){
      return this.$store.state.isEnglish
    }
  },
  created() {
    this.getYearWorks(this.currentYear)
    this.getYearWorks(this.currentYear)
    if(this.clickYear != 0){
      this.getYearWorks(this.clickYear)
      this.currentYear = this.clickYear
    }
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
    },
    //获取年份作品列表
    getYearWorks(year) {
      getHomeData(year).then(res => {
        this.yearWorks = res.data.yearArt[year]
        let obj = res.data.yearArt
        this.years = Object.keys(obj).reverse()
        this.currentYear = this.years[0]
      })
    },
    //  年份筛选
    changeYear(year) {
      this.currentYear = year
      this.getYearWorks(this.currentYear)
    },
    //  跳转到作品详情
    goWorkDetail(id) {
      this.$router.push({name: "workDetails", query: {id: id}})
    }
  }
}
</script>
<style scoped>
.swiper-slide img {
  object-fit: scale-down;
  height: 400px;
}
</style>
