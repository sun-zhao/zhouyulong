<template>
  <div class="content list HYQiHeiX2 font18">
    <p @click="newsClick(item.id)" v-for="(item,index) in list" :key="index" :id="item.id">
      {{ !isEnglish ? item.newsTitle : item.newsTitleEn }}</p>
  </div>
</template>

<script>
import {getNewsList} from '@/utils/utils'

export default {
  name: 'List',
  data() {
    return {
      id: this.$route.query.id,
      list: {}
    }
  },
  computed: {
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getListData() {
      //如果传过来的ID=1那么说明是请求新闻列表，搜索要想展示列表，请传入2
      getNewsList().then(res => {
        this.list = res.data
      })
    },
    //  点击查看新闻详情
    newsClick(id) {
      this.$router.push({name: "newsDetail", query: {id: id}})
    }
  }
};
</script>
