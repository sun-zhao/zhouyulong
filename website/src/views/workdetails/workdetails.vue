<template>
  <div class="content">
    <div class="work-slogan text-center HYXiDengXianJ font18">
      <p class="font28">
        <span v-if="!isEnglish">《 {{ worksData.title }} 》 </span>
        <span style="font-style: italic;" v-else>{{ worksData.titleEn }}</span>
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
      <!--      <p class="HYXiDengXianJ link text-left mart-20">-->
      <!--        <span v-if="!isEnglish">《{{ worksData.title }}》</span>-->
      <!--        <span style="font-style: italic;" v-else>{{ worksData.titleEn }}</span>-->
      <!--        ©-->
      <!--        <span>{{ worksData.artYear }}</span>-->
      <!--      </p>-->
    </div>
    <div v-show="worksShowLength > 0" class="content work-slogan relative 1" ref="works">
      <detailWorks :works_details="worksShowData" :preview="showPreview"></detailWorks>
    </div>
    <!--    视频-->
    <div class="video-box work-slogan" v-show="this.$store.state.videoList.length > 0">
      <div class="" v-for="(item,index) in this.$store.state.videoList" :key="index">
        <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions[index]"
            @play="onPlayerPlay($event,index)"
            @pause="onPlayerPause($event)"
        ></video-player>
      </div>
    </div>
    <div class="work-slogan HYXiDengXianJ" v-show="worksData.artContent">
      <div class="font16" v-html="!isEnglish ? worksData.artContent : worksData.artContentEn"></div>
      <p class="text-center mart-40"><span class="line"></span></p>
    </div>
  </div>
</template>
<style>
.video-js .vjs-big-play-button {
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 100% !important;
  top: 50%;
  left: 50%;
  margin: -40px 0 0 -40px;
}
</style>
<script>
import detailWorks from "@/components/detailWorks/detailWorks";
import {getHomeData,getArtDetail} from "@/utils/utils";

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
      worksShowLength: null,
      playerOptions: []
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
      return this.worksData.artworkInfos
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
    this.getArtsData(this.$route.query.id)
    this.getYears()
  },
  methods: {
    //同通过id获取当前id的详情数据
    getArtsData(id) {
      getArtDetail(id).then(res => {
        let obj = res.data
        this.$store.state.videoList = {}
        this.playerOptions=[]
        this.worksData = obj
        // console.log(this.worksData)
        if(obj.showImages){
          const worksShowLength = Object.keys(obj.showImages).length;
          this.worksShowLength = worksShowLength
        }
        if(obj.videoUrl){
          this.$store.state.videoList = obj.videoUrl
        }
        // for (let i = 0; i < this.$store.state.videoList.length; i++) {
        //   this.$store.state.videoList.push(this.$store.state.videoList[i])
        // }
        if (this.$store.state.videoList.length > 0) {
          for (let i = 0; i < this.$store.state.videoList.length; i++) {
            for (let j = 0; j < this.$store.state.videoList.length; j++) {
              let arrs = {
                playbackRates: [1.0, 2.0, 3.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: "zh-CN",
                aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                  {
                    type: "video/mp4",
                    src: this.$store.state.videoList[j] //url地址
                  }
                ],
                poster: "", //封面地址
                notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                  timeDivider: true,
                  durationDisplay: true,
                  remainingTimeDisplay: false,
                  fullscreenToggle: true //全屏按钮
                }
              };
              this.playerOptions.push(arrs);
            }
          }
        }
        console.log(this.playerOptions)
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
      this.$store.state.videoList = {}
    },
    onPlayerPlay(player, index) {
      let that = this.$refs.videoPlayer;
      for (let i = 0; i < that.length; i++) {
        if (i != index)
          that[i].player.pause()
      }
    },
    onPlayerPause() {
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
