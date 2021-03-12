<template>
  <div class="content">
    <div class="work-slogan text-center HYXiDengXianJ font18">
      <p class="font28">
        <span>《 {{ !isEnglish ? worksData.title : worksData.titleEn }} 》 </span>
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
      <detailWorks :works_details="worksDetailData" :preview="worksPreview" :previewText="worksPreviewText"></detailWorks>
      <p class="HYXiDengXianJ link text-center mart-20">
        <span>《 {{ !isEnglish ? worksData.title : worksData.titleEn }} 》 </span>
        ©
        <span>{{ worksData.artYear }}</span>
      </p>
    </div>
    <div class="content work-slogan relative" ref="works">
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
      years: []
    }
  },
  computed: {
    isEnglish() {
      return this.$store.state.isEnglish
    },
    currentYear(){
      return this.$store.state.currentYear
    },
    worksDetailData() {
      return this.worksData.artworkImages
    },
    worksShowData(){
      return this.worksData.showInfos
    },
    worksPreview() {
      return  1
    },
    worksPreviewText(){
      if(!this.isEnglish){
        return this.worksData.title
      }else{
        return this.worksData.titleEn
      }
    },
    showPreview(){
      return 2
    }
  },
  created() {
    this.getArtsData(this.workId)
    this.getYears()
  },
  methods: {
    //网络数据请求相关方法
    getArtsData(id) {
      getArtData(id).then(res => {
        let obj = res.data.find(function (obj) {
          return obj.id === parseInt(id)
        })
        this.worksData = obj
      })
    },
    //获取年份作品列表
    getYears(year) {
      getHomeData(year).then(res => {
        let obj = res.data.yearArt
        this.years = Object.keys(obj).reverse()
      })
    },
    //  年份筛选
    goHomeYear(year) {
      this.$router.push({name: "home"})
      this.$store.state.currentYear =  year
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
