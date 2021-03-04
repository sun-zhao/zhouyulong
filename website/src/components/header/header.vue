<template>
  <div class="header HYXiDengXianJ clearfix" :domItemsTop="domItemsTop">
    <span class="fl logo"><img src="../../assets/img/logo.png"></span>
    <div class="fl header-nav clearfix">
      <a v-for="(item,index) in navs" :key="index" @click="navClick" :data-id="index">{{ item }}</a>
    </div>
    <div class="search-box fr">
      <input type="search">
      <span>
        <em>中文</em>
        <em>|</em>
        <em>English</em>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    domItemsTop:Array
  },
  data() {
    return {
      navs: ['新闻', '作品', '展览', '出版物', '资料库', '关于']
    }
  },
  methods:{
    navClick() {
      // document.documentElement.scrollTop = this.domItemsTop[index] - 350
      console.log(this.domItemsTop)
    },
  }
};
</script>
