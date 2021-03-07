<template>
  <div class="news news-list">
    <p v-for="(item,index) in news.slice(0, 2)" :key="index">
      <span>{{ item.newsTitle }}</span>
      <a @click="newsClick(item.id)" :id="item.id" class="link">了解更多</a>
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
    },
  //  点击查看新闻详情
    newsClick(id){
      this.$router.push({name: "newsDetail", query: {id: id}})
    }
  }
}
</script>

<style scoped>

</style>
