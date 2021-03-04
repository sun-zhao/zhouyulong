<template>
  <div class="news news-list">
    <p v-for="item in news" :key="item.index">
      <span>{{ item.newsTitle }}</span>
      <a :href="item.link" :id="item.id" class="link">了解更多</a>
    </p>
  </div>
</template>

<script>
import {getHomeData} from "@/utils/utils";

export default {
  name: "news",
  data() {
    return {
      news: []
    }
  },
  created() {
    this.getNewsData()
  },
  methods: {
    //网络数据请求相关方法
    getNewsData() {
      getHomeData().then(res => {
        this.news = res.data.news;
      })
    }
  }
}
</script>

<style scoped>

</style>
