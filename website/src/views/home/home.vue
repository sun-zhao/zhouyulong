<template>
  <div id="home" @clickTab="clickTab">
    <newsCount id="news"></newsCount>
    <div class="content slogan text-center">
      <p class="font28 HYXiDengXianJ">“一切问题都没有最终答案，也没有唯一答案，所有判断都在流变。”</p>
      <p class="font18 HYQiHeiX2">周的作品渗透着历史主义者的气质，带着博斯般的宗教神秘色彩。他善用幽默的口吻表达严肃和沉重的主题，有时暗含勃鲁</p>
      <p class="font18 HYQiHeiX2">盖尔式的轻盈的嘲讽。</p>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll works relative" id="works">
      <works :clickYear="year"></works>
    </div>
    <div class="content scroll slogan text-center" id="infos">
      <p class="font18 HYXiDengXianJ">近期展讯</p>
      <div class="relative swiper-info mart-40">
        <exhibitionInfo></exhibitionInfo>
      </div>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll HYQiHeiX2" id="publication">
      <div class="text-center HYXiDengXianJ font18">
        <p class="font28">出版物</p>
        <p>以下出版物集合了周裕隆的创作与实践，可通过链接进行购买。</p>
      </div>
      <div class="publication mart-40">
        <div class="pub-item" v-for="item in publications" :key="item.index">
          <p class="pub-img"><img :src="item.coverImage"></p>
          <div class="font18 mart-20">
            <p>{{ item.name }}</p>
          </div>
          <p class="font14 mart-40" v-html="item.desc"></p>
          <p><a :href="item.buyLink" target="_blank" class="link">点击购买</a></p>
        </div>
      </div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll slogan HYXiDengXianJ" id="database">
      <div class="text-center font18">
        <p class="font28">资料库</p>
        <p>文字从自我和他者的角度阐释艺术创作。周裕隆习惯用摄影札记的方式记录拍摄前后的思考，这里也收录了他接受过的采访</p>
        <p>文本与学者评论。</p>
        <p class="mart-20">
          <router-link class="link font14" to="database">点击阅读</router-link>
        </p>
      </div>
      <p class="text-center mart-20"><span class="line"></span></p>
    </div>
    <div class="content scroll font16 HYXiDengXianJ" id="about">
      <div class="clearfix">
        <span class="about fl">
          <img src="@/assets/img/2.jpg"></span>
        <div class="about fr" v-for="(item,index) in aboutInfo" :key="index">
          <div v-if="!isEnglish" v-html="item.context"></div>
          <div v-else v-html="item.contextEn"></div>
        </div>
      </div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
  </div>
</template>

<script>
import newsCount from "@/components/newsCount/newsCount";
import works from "@/components/works/works";
import exhibitionInfo from "@/components/exhibitionInfo/exhibitionInfo";

import {getHomeData, getAbout} from "@/utils/utils";


export default {
  name: 'Home',
  components: {
    newsCount,
    works,
    exhibitionInfo
  },
  data() {
    return {
      isEnglish: this.GLOBAL.isEnglish,
      publications: [],
      exhibition: {},
      aboutInfo: {}
    }
  },
  computed: {
    year() {
      return this.$route.query.year
    }
  },
  created() {
    this.getPubData()
    this.getAbout()
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    //网络数据请求相关方法
    getPubData() {
      getHomeData().then(res => {
        this.publications = res.data.publications;
      })
    },
    //  获取about
    getAbout() {
      getAbout().then(res => {
        this.aboutInfo = res.data
      })
    },
    clickTab(index){
      console.log(index)
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.scroll')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      // 把下标赋值给 vue 的 data
      this.active = navIndex
    },
    scrollTo(index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

