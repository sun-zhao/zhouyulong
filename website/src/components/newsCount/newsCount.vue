<template>
  <div class="newscount news-content HYQiHeiX2 clearfix animated fadeInUp">
    <div class="news-box mart-130 fl">
      <div v-show="!isEnglish" class="personal-info font20">
        <p>周裕隆</p>
        <p>1978年生。</p>
        <p>2000年：就职于北京奥美广告。</p>
        <p>2002年：成立DTMPHOTO摄影工作室。</p>
        <p>现工作生活于上海。</p>
      </div>
      <div v-show="isEnglish" class="personal-info font20">
        <p>Zhou Yulong</p>
        <p>B.1978.</p>
        <p>2000年：Worked in Ogilvy & Mather.</p>
        <p>2002年：Founded DTMPHOTO photography studio.</p>
        <p>Now base in Shanghai.</p>
      </div>
      <div class="news mart-40 font18">
        <p v-show="!isEnglish" @click="toList(1)">新闻</p>
        <p v-show="isEnglish" @click="toList(1)">News</p>
        <news></news>
      </div>
    </div>
    <div class="relative swiper-news fr">
      <newsRightSwiper></newsRightSwiper>
    </div>
  </div>
</template>

<script>
import news from "@/components/newsCount/news";
import newsRightSwiper from "@/components/newsCount/newsRightSwiper";

export default {
  name: 'Newscount',
  data() {
    return {

    }
  },
  components: {
    news,
    newsRightSwiper
  },
  computed:{
    isEnglish(){
      return this.$store.state.isEnglish
    }
  },
  created() {
  },
  methods: {
    toList(id){
      this.$router.push({name:'list',query:{id:id}})
    }
  }
};
</script>
