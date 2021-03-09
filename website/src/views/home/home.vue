<template>
  <div  @clickTab="clickTab">
    <div class="mart-130" id="link0">
      <newsCount></newsCount>
    </div>
    <div class="content slogan text-center">
      <p class="font28 HYXiDengXianJ">“一切问题都没有最终答案，也没有唯一答案，所有判断都在流变。”</p>
      <p class="font18 HYQiHeiX2">周的作品渗透着历史主义者的气质，带着博斯般的宗教神秘色彩。他善用幽默的口吻表达严肃和沉重的主题，有时暗含勃鲁</p>
      <p class="font18 HYQiHeiX2">盖尔式的轻盈的嘲讽。</p>
      <p class="mart-40" id="link1"><span class="line"></span></p>
    </div>
    <div class="content scroll animated works relative fadeInUp" >
      <works :clickYear="year"></works>
    </div>
    <div class="content scroll animated slogan text-center" id="link2">
      <p class="font18 HYXiDengXianJ">近期展讯</p>
      <div class="relative swiper-info mart-40">
        <exhibitionInfo></exhibitionInfo>
      </div>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll animated HYQiHeiX2" id="link3">
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
    <div class="content scroll animated slogan HYXiDengXianJ" id="link4" style="padding-bottom: 200px;">
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
    <p id="link5" style="padding-top: 150px;"></p>
    <div class="content scroll animated font16 HYXiDengXianJ">
      <div class="clearfix">
        <span class="about fl">
          <img src="@/assets/img/2.jpg"></span>
        <div class="about fr" v-for="(item,index) in aboutInfo" :key="index">
          <div v-if="!isEnglish" v-html="item.context"></div>
          <div v-else v-html="item.contextEn" class="HYQiHeiX2"></div>
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
      publications: [],
      exhibition: {},
      aboutInfo: {}
    }
  },
  computed: {
    year() {
      return this.$route.query.year
    },
    isEnglish() {
      return this.$store.state.isEnglish
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
    clickTab(index) {
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
      // console.log(offsetTopArr)

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
    }
  }
}
</script>

