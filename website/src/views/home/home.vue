<template>
  <div id="home">
    <newsCount id="news"></newsCount>
    <div class="content slogan text-center">
      <p class="font28 HYXiDengXianJ">“一切问题都没有最终答案，也没有唯一答案，所有判断都在流变。”</p>
      <p class="font18 HYQiHeiX2">周的作品渗透着历史主义者的气质，带着博斯般的宗教神秘色彩。他善用幽默的口吻表达严肃和沉重的主题，有时暗含勃鲁</p>
      <p class="font18 HYQiHeiX2">盖尔式的轻盈的嘲讽。</p>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content works relative" ref="works">
      <works></works>
    </div>
    <div class="content slogan text-center" ref="infos">
      <p class="font18 HYXiDengXianJ">近期展讯</p>
      <div class="relative swiper-info mart-40">
        <exhibitionInfo></exhibitionInfo>
      </div>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="content HYQiHeiX2" ref="publication">
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
          <p><a :href="item.buyLink" class="link">点击购买</a></p>
        </div>
      </div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
    <div class="content slogan HYXiDengXianJ" ref="database">
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
    <div class="content font16 HYXiDengXianJ" ref="about">
      <div class="clearfix">
        <span class="about fl"><img
            src="@/assets/img/2.jpg"></span>
        <div class="about fr">
          <p>关于</p>
          <p>
            从某种角度说，周的作品渗透着历史主义者的气质，带着博斯般的宗教神秘色彩。他善用幽默的口吻表达严肃和沉重的主题，有时暗含勃鲁盖尔式的轻盈的嘲讽。周出生在知识分子家庭，童年在各种历史故事、神话传说中度过。高考时填报了考古学专业，后因英语成绩而落榜。他酷爱导演黑泽明，痴迷于作家博尔赫斯与阿瑟克拉克；反对民族主义，并对任何既成的结论都保持着警惕与怀疑。他曾说：“一切问题都没有最终答案，也没有唯一答案，所有判断都在流变”。从这些经历以及作品中不难看出，他对历史与不可知事物为何如此钟爱。也许正因如此，周不愿把自己归类于任何群体，不拘泥于创作的方法，不承认所谓的定义.（Text
            Arthur L. Gombrich）
          </p>
          <p class="mart-20 "><a href="#" class="link font14">了解更多</a></p>
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

import {getHomeData} from "@/utils/utils";

export default {
  name: 'Home',
  components: {
    newsCount,
    works,
    exhibitionInfo
  },
  data() {
    return {
      publications: []
    }
  },
  created() {
    this.getPubData()
  },
  methods: {
    //网络数据请求相关方法
    getPubData() {
      getHomeData().then(res => {
        this.publications = res.data.publications;
      })
    }
  }
}
</script>

