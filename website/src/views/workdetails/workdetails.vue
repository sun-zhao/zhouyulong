<template>
  <div class="content">
    <div class="work-slogan text-center HYXiDengXianJ font18">
      <p class="font28">
        <span v-if="!isEnglish">《 {{ worksData.title }} 》 </span>
        <span style="font-style: italic;" v-else>{{worksData.titleEn}}</span>
        ©
        <span>{{ worksData.artYear }}</span>
      </p>
      <p>{{ !isEnglish ? worksData.desc : worksData.descEn }}</p>
      <p class="mart-40"><span class="line"></span></p>
    </div>
    <div class="nums-nav font20 Helvetica">
      <span v-for="(year,index) in years"
            :class="{active:year  == currentYear}"
            :key="index"
            @click="goHomeYear(year)">{{ parseInt(year) }}</span>
    </div>
    <div class="content works relative" ref="works">
      <detailWorks :works_details="worksDetailData" :preview="worksPreview"
                   :previewText="worksPreviewText"></detailWorks>
      <p class="HYXiDengXianJ link text-left mart-20">
        <span v-if="!isEnglish">《{{ worksData.title }}》</span>
        <span style="font-style: italic;" v-else>{{ worksData.titleEn }}</span>
        ©
        <span>{{ worksData.artYear }}</span>
      </p>
    </div>
    <div v-show="worksShowLength > 0" class="content work-slogan relative 1" ref="works">
      <detailWorks :works_details="worksShowData" :preview="showPreview"></detailWorks>
    </div>
    <div class="work-slogan HYXiDengXianJ">
      <div class="font16" v-html="!isEnglish ? worksData.artContent : worksData.artContentEn"></div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
  </div>
</template>

<script>
import detailWorks from "@/components/detailWorks/detailWorks";
import {getArtData, getHomeData} from "@/utils/utils";
export default {
  name: 'workdetails',
  components: {
    detailWorks
  },
  data() {
    return {
      workId: this.$route.query.id,
      worksData: {},
      years: [],
      worksShowLength:null
    }
  },
  computed: {
    isEnglish() {
      return this.$store.state.isEnglish
    },
    currentYear() {
      return this.$store.state.currentYear
    },
    worksDetailData() {
      return this.worksData.artworkImages
    },
    worksShowData() {
      return this.worksData.showInfos
    },
    worksPreview() {
      return 1
    },
    worksPreviewText() {
      if (!this.isEnglish) {
        return this.worksData.title
      } else {
        return this.worksData.titleEn
      }
    },
    showPreview() {
      return 2
    }
  },
  activated() {
    this.getArtsData(this.workId)
    this.getYears()
  },
  methods: {
    //同通过id获取当前id的详情数据
    getArtsData(id) {
      getArtData(id).then(res => {
        let obj = res.data.find(function (obj) {
          return obj.id === parseInt(id)
        })
        this.worksData = obj
        const worksShowLength = Object.keys(obj.showInfos).length;
        this.worksShowLength = worksShowLength
      })

    },
    //获取年份作品列表
    getYears() {
      getHomeData().then(res => {
        let obj = res.data.yearArt
        this.years = Object.keys(obj).reverse()
      })
    },
    //  年份筛选
    goHomeYear(year) {
      this.$router.push({name: "home", query: {id: 'link1'}})
      this.$store.state.currentYear = year
    }
  }
};
</script>
<style scoped>

.nums-nav {
  position: fixed;
  left: 5%;
  top: 30%;
}
</style>
