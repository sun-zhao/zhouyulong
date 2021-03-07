<template>
  <div class="newsDetail">
    <articelDetail :detail="newsDetail"></articelDetail>
  </div>
</template>

<script>
import articelDetail from "@/components/articelDetail/articelDetail";
import {getNewsDetail} from '@/utils/utils'
export default {
  name: 'Newsdetail',
  data(){
    return{
      isEnglish:this.GLOBAL.isEnglish,
      newsId:this.$route.query.id,
      newsContent:{}
    }
  },
  components: {
    articelDetail
  },
  computed:{
    newsDetail(){
      return this.newsContent
    }
  },
  created() {
    this.getNewsDetail(this.newsId)
  },
  methods:{
    getNewsDetail(id){
      getNewsDetail(id).then(res =>{
        this.newsContent = res.data
      })
    }
  }
};
</script>
