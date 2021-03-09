<template>
  <div id="Database">
    <div class="content">
      <div class="category-main">
        <div class="category font16 HYQiHeiX2">
          <p @click="changeCatory(item.categoryCode)"
             v-for="(item,index) in categorys"
             :key="index"
             :class="{active:item.categoryCode === currentCategoryCode}"
             :id="item.categoryCode">{{ !isEnglish ? item.categoryName : item.categoryEn }}</p>
        </div>
        <div class="articleList font14 HYXiDengXianJ">
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
import {getCategoryList, getArticleList,getArticleDetail} from "@/utils/utils";

export default {
  name: "Database",
  components:{
    articelDetail
  },
  data() {
    return {
      categorys: {},
      currentCategoryCode: '1',
      currentArticleList: {},
      articelContent:{}
    }
  },
  computed: {
    articelMain(){
      return this.articelContent
    },
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  created() {
    this.getCategory()
    this.getArticle(this.currentCategoryCode)
  },
  methods: {
    //获取资料库分类
    getCategory() {
      getCategoryList().then(res => {
        this.categorys = res.data
      })
    },
    //  根据类目获取资料库内资料列表
    getArticle(categoryCode) {
      getArticleList(categoryCode).then(res => {
        this.currentArticleList = res.data
        this.articelContent = this.currentArticleList[0]
      })
    },
    //  更改类目
    changeCatory(categoryCode) {
      this.getArticle(categoryCode)
      this.currentCategoryCode = categoryCode
    },
  //  点击文章标题
    getArticleDetail(id){
      getArticleDetail(id).then(res =>{
        this.articelContent = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
