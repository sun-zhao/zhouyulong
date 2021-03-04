<template>
  <div class="newscount news-content mart-130 HYQiHeiX2 clearfix animated fadeInUp">
    <div class="news-box mart-130 fl">
      <div class="personal-info font20">
        <p>周裕隆</p>
        <p>摄影师、自由艺术家</p>
        <p>b.1978</p>
        <p>2000-2001年就职于Ogilvy & Mather奥美广告。</p>
        <p>2001年成立DTMPHOTO工作室，独立从事商业摄影。</p>
        <p>2005年开始个人艺术创作至今。</p>
        <p>现居上海。</p>
      </div>
      <div class="news mart-40 font18">
        <p>新闻</p>
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
  created() {
  },
  methods: {

  }
};
</script>
