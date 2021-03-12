<template>
  <div id="Database">
    <div class="content">
      <div class="category-main">
        <div class="category font16 HYQiHeiX2">
          <p @click="changeCatory(item.categoryCode)"
             v-for="(item,index) in categorys"
             :key="index"
             :class="{active:item.categoryCode === currentCode}"
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
import {getCategoryList, getArticleList, getArticleDetail} from "@/utils/utils";

export default {
  name: "Database",
  components: {
    articelDetail
  },
  data() {
    return {
      categorys: {},
      currentCode: '1',
      currentArticleList: {},
      articelContent: {},
      currentId: null
    }
  },
  computed: {
    articelMain() {
      return this.articelContent
    },
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  created() {
    this.getCategory()
    this.getCode()
    this.getId()
    this.getArticle(this.currentCode)
    this.getArticleDetail(this.currentId)
  },
  methods: {
    getCode() {
      const that = this
      if (that.$route.query.code) {
        that.currentCode = that.$route.query.code
      } else {
        that.currentCode = '1'
      }
      console.log('currentCode:' + that.currentCode)
    },
    getId() {
      const that = this
      if (that.$route.query.id) {
        that.currentId = that.$route.query.id
      } else {
        that.currentId = that.articelContent.id
        console.log(that.articelContent)
        console.log('currentId:' + that.currentId)
      }
    },
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
        this.currentId = res.data[0].id
        console.log('执行完毕:' + this.currentId)
      })
    },
    //  更改类目
    changeCatory(categoryCode) {
      this.getArticle(categoryCode)
      this.currentCode = categoryCode
      console.log(this.currentCode)
    },
    //  点击文章标题
    getArticleDetail(currentId) {
      getArticleDetail(currentId).then(res => {
        this.articelContent = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
