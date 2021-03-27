<template>
  <div id="Database">
    <div class="content">
      <div class="category-main">
        <div class="category font16 HYQiHeiX2">
          <div v-for="(item,index) in categorys" :key="index" :id="item.categoryCode">
            <p @click="changeCatory(item.categoryCode)" :class="{active:item.categoryCode === currentCode}">{{ !isEnglish ? item.categoryName : item.categoryEn }}</p>
            <div v-show="item.categoryCode === currentCode" class="articleList font14 HYXiDengXianJ hidden-xs">
              <p v-for="(item,index) in currentArticleList"
               :key="index"
               :id="item.id" @click="getArticleDetail(item.id)">
              {{ !isEnglish ? item.newsTitle : item.newsTitleEn }}</p>
            </div>
          </div>
        </div>
        <div class="articleList font14 HYXiDengXianJ visible-xs">
          <p v-for="(item,index) in currentArticleList"
             :key="index"
             :id="item.id" @click="getArticleDetail(item.id)">
            {{ !isEnglish ? item.newsTitle : item.newsTitleEn }}</p>
        </div>
      </div>
      <articelDetail :detail="articelMain"></articelDetail>
    </div>
  </div>
</template>
<script>
import articelDetail from "@/components/articelDetail/articelDetail";
import {getCategoryList, getArticleList, getArticleDetail} from "@/utils/utils";

export default {
  name: "Database",
  components: {
    articelDetail
  },
  data() {
    return {
      categorys: {},
      currentCode: this.$route.query.code || '1',
      currentArticleList: {},
      articelContent: {},
      id:null
    }
  },
  computed: {
    articelMain() {
      return this.articelContent
    },
    isEnglish() {
      return this.$store.state.isEnglish
    },
    // currentId() {
    //   return this.$route.query.id ? this.$route.query.id : this.id
    // }
  },
  activated() {
    this.getCategory()
    this.getArticle(this.currentCode)
    this.getResult()
  },
  methods: {
    //获取资料库分类
    getCategory() {
      getCategoryList().then(res => {
        this.categorys = res.data
      })
    },
    //  根据类目获取资料库内资料列表
    getArticle(category) {
      getArticleList(category).then(res => {
        this.currentArticleList = res.data
        this.articelContent = this.currentArticleList[0]
        this.id = this.articelContent.id
      })
    },
    //  更改类目
    changeCatory(categoryCode) {
      this.getArticle(categoryCode)
      this.currentCode = categoryCode
    },
     // 点击文章标题
    getArticleDetail(id) {
      getArticleDetail(id).then(res => {
        this.articelContent = res.data
      })
    },
    getResult(){
      if(this.$route.query.id){
        this.getArticleDetail(this.$route.query.id)
        // console.log('搜索的文章：'+ this.$route.query.id)
      }else{
        // console.log('111')
      }
    }
  }
}
</script>

<style scoped>

</style>
