<template>
  <div class="content list HYQiHeiX2 font18">
    <div class="HYXiDengXianJ font20">共搜索出<span class="HYQiHeiX2 link">{{ results.total }}</span>条结果：</div>
    <div class="mart-20">
      <p v-for="(item,index) in results.list"
         :key="index"
         :data-id="item.id"
         :data-type="item.type"
         :data-ext="item.ext"
         @click="toDetails($event)">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',
  data() {
    return {
      id: this.$route.query.id,
      list: {}
    }
  },
  computed: {
    isEnglish() {
      return this.$store.state.isEnglish
    },
    results() {
      return this.$store.state.results
    }
  },
  created() {
    this.getResultsData()
  },
  methods: {
    getResultsData() {
      return this.$store.state.results
    },
    //  点击查看新闻详情
    toDetails:function (e) {
      let id = e.target.getAttribute('data-id')
      let type = e.target.getAttribute('data-type')
      let ext = e.target.getAttribute('data-ext')
      if (type === 'news') {
        this.$router.push({name: "newsDetail", query: {id: id}})
      } else if (type === 'art') {
        this.$router.push({name: "workdetails", query: {id: id}})
      } else {
        this.$router.push({name: "database", query: {code: ext, id: id}})
      }
    }
  }
};
</script>
