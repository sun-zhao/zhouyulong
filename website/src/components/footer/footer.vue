<template>
  <div v-if="!isEnglish" class="footer font18 HYQiHeiX2 text-center">
    <p>
      <span>微博 |</span>
      <a href="https://weibo.com/zhouyulongdtm?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank">@周裕隆-</a>
    </p>
    <p>
      <span>微信公众号 |</span>
      <a target="_blank">周裕隆DTMPHOTO</a>
    </p>
    <p>
      <span>INSTAGRAM |</span>
      <a href="https://www.instagram.com/zhouyulongartstudio/" target="_blank">@zhouyulongartstudio</a>
    </p>
    <p>
      <span>邮箱 |</span>
      <a href="" target="_blank">zhouyulongstudio@gmail.com</a>
    </p>
    <p class="mart-20 font14">©2008-2016 www.zhouyulongart.com All rights reserved. 京ICP备18042470号-1</p>
  </div>
  <div v-else class="footer font18 HYQiHeiX2 text-center">
    <p>
      <span>WEIBO |</span>
      <a href="https://weibo.com/zhouyulongdtm?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank">@周裕隆-</a>
    </p>
    <p>
      <span>WeChat Subscriptio |</span>
      <a target="_blank">周裕隆DTMPHOTO</a>
    </p>
    <p>
      <span>INSTAGRAM |</span>
      <a href="https://www.instagram.com/zhouyulongartstudio/" target="_blank">@zhouyulongartstudio</a>
    </p>
    <p>
      <span>EMAIL |</span>
      <a href="" target="_blank">zhouyulongstudio@gmail.com</a>
    </p>
    <p class="mart-20 font14">©2008-2016 www.zhouyulongart.com All rights reserved. 京ICP备18042470号-1</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed:{
    isEnglish() {
      return this.$store.state.isEnglish
    }
  }
};
</script>
<style scoped>
.footer a{
  padding-left:10px;
}
</style>
