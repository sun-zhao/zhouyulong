<template>
  <div class="articelDetail HYXiDengXianJ font16">
    <p class="font28 text-center">{{!isEnglish ? detail.newsTitle : detail.newsTitleEn}}</p>
    <p class="text-center font14">{{detail.createTime}}</p>
    <p class="article-sub">{{!isEnglish ? detail.subTitle : detail.subTitleEn}}</p>
    <div class="article-text HYQiHeiX2" v-html="!isEnglish ? detail.newsContent : detail.newsContentEn"></div>
  </div>
</template>

<script>
export default {
  name: 'Articeldetail',
  data(){
    return{

    }
  },
  computed:{
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  props:{
    detail:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>
