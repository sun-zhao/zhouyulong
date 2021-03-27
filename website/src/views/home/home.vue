<template>
  <div>
    <div class="mart-130" id="link0">
      <newsCount></newsCount>
    </div>
    <div v-if="!isEnglish" class="content slogan text-center">
<!--      <p class="font28 HYXiDengXianJ">“一切问题都没有最终答案，也没有唯一答案，所有判断都在流变。”</p>-->
<!--      <p class="font18 HYQiHeiX2">周的作品渗透着历史主义者的气质，带着博斯般的宗教神秘色彩。他善用幽默的口吻表达严肃和沉重的主题，有时暗含勃鲁盖尔式的轻盈的嘲讽。</p>-->
<!--      <p class="font18 HYQiHeiX2">盖尔式的轻盈的嘲讽。</p>-->
      <p class="mart-40"><span class="line"></span></p>
    </div>

    <div v-else class="content slogan text-center">
<!--      <p class="font28 HYQiHeiX2">"There is no final answer to any question, no single answer, all judgment is in-->
<!--        flux."</p>-->
<!--      <p class="font18 HYQiHeiX2">Chou's works are permeated with the ethos of historicism and religious mysticism like-->
<!--        Bosch's. He used humor to convey serious and heavy subjects, sometimes with a hint of Brughelian lightness of-->
<!--        irony.</p>-->
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <p id="link1">111</p>
    <p id="link3">333</p>
    <div class="content scroll animated works relative fadeInUp">
      <works ></works>
    </div>
    <div class="content scroll animated slogan text-center" id="link2">
      <p v-if="!isEnglish" class="font28 HYXiDengXianJ">近期展讯</p>
      <p v-else class="font28 HYQiHeiX2">EXHIBITION</p>
      <div class="relative swiper-info mart-40">
        <exhibitionInfo></exhibitionInfo>
      </div>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll animated HYQiHeiX2">
      <div v-if="!isEnglish" class="text-center HYXiDengXianJ font18">
        <p class="font28">出版物</p>
      </div>
      <div v-else class="text-center HYQiHeiX2 font18">
        <p class="font28">PUBLICATION</p>
      </div>
      <div class="publication mart-40">
        <div class="pub-item" v-for="item in publications" :key="item.index">
          <p class="pub-img"><img :src="item.coverImage"></p>
          <div class="font18 mart-20">
            <p>{{ item.name }}</p>
          </div>
          <p class="font14 mart-40" v-html="item.desc"></p>
          <p v-if="!isEnglish"><a :href="item.buyLink" target="_blank" class="link">点击购买</a></p>
          <p v-else><a :href="item.buyLink" target="_blank" class="link">Click to buy</a></p>
        </div>
      </div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
    <div class="content scroll animated slogan HYXiDengXianJ" id="link4">
      <div class="text-center font18">
        <div v-if="!isEnglish">
          <p class="font28">资料库</p>
          <p>收录学者评论、访谈、等文本资料。</p>
        </div>
        <div v-else class="HYQiHeiX2">
          <p class="font28">LIBRARY</p>
          <p>Collection of articles, and interviews.</p>
        </div>
        <p class="mart-20">
          <router-link v-if="!isEnglish" class="link font14" to="database">点击阅读</router-link>
          <router-link v-else class="link font14" to="database">READ MORE</router-link>
        </p>
      </div>
      <p class="text-center mart-20"><span class="line"></span></p>
    </div>
    <p id="link5"></p>
    <div class="content scroll animated font16 HYXiDengXianJ">
      <div class="clearfix">
        <span class="about fl">
          <img src="@/assets/img/2.jpg"></span>
        <div class="about fr" v-for="(item,index) in aboutInfo" :key="index">
          <div :class="hiddenTxt ? 'text-hidden':''">
            <div v-if="!isEnglish" v-html="item.context"></div>
            <div v-else v-html="item.contextEn" class="HYQiHeiX2"></div>
          </div>
          <div v-if="!isEnglish" class="mart-10">
            <p v-if="hiddenTxt" @click="showMore"><a class="link">查看更多</a></p>
            <p v-else @click="hideMore"><a class="link">收起</a></p>
          </div>
          <div v-else class="mart-10">
            <p v-if="hiddenTxt" @click="showMore"><a class="link">SEE MORE</a></p>
            <p v-else @click="hideMore"><a class="link">FOLD</a></p>
          </div>
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
      aboutInfo: {},
      hiddenTxt: true
    }
  },
  computed: {
    year() {
      return this.$store.state.currentYear
    },
    isEnglish() {
      return this.$store.state.isEnglish
    }
  },
  activated() {
    this.getPubData()
    this.getAbout()
    this.$nextTick(() => {
      this.toLocal()
    })
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
    toLocal() {
      if (this.$route.query.id) {
        document.querySelector('#link1').scrollIntoView(true)
      }
    },
    //网络数据请求相关方法
    getPubData() {
      getHomeData().then(res => {
        this.publications = res.data.publications
      })
    },
    //  获取about
    getAbout() {
      getAbout().then(res => {
        this.aboutInfo = res.data
      })
    },
    showMore() {
      this.hiddenTxt = false
    },
    hideMore() {
      this.hiddenTxt = true
    }
  }
}
</script>

