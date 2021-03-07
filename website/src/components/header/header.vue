<template>
  <div class="header HYXiDengXianJ clearfix">
    <span class="fl logo" @click="goHome"><img src="../../assets/img/logo.png"></span>
    <div v-if="!isEnglish" class="fl header-nav clearfix">
      <a v-for="(item,index) in navs"
         :class="{active: active == index}"
         :key="index"
         @click="clickTab(index)"
         :data-id="index">{{ item }}</a>
    </div>
    <div v-else class="fl header-nav clearfix">
      <a v-for="(item,index) in navsEn"
         :key="index"
         :data-id="index"
         @click="scrollTo(index)">{{ item }}</a>
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
  props: {
    active: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      isEnglish: this.GLOBAL.isEnglish,
      navs: ['新闻', '作品', '展览', '出版物', '资料库', '关于'],
      navsEn: ['News', 'Works', 'Exhibitions', 'Publications', 'Database', 'About']
    }
  },
  methods: {
    clickTab(index) {
      this.$emit('clickTab',index)
      this.active = index
    },
    goHome() {
      this.$router.push({name: 'home'})
    }
  }
};
</script>
