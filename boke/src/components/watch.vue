<template>
  <div>
  </div>
</template>
<script type="text/javascript">
  //空白页面中转关键词文章类型页面跳转，解决同一路由公用模板切换问题
  export default {
    data() {
      return {}
    },
    created() {
      //console.log(this.$route.params)
      if (this.$route.query.code == 0) {
        this.$router.push({path: '/index/search/' + this.$route.params.keyword})
      }

    }
  }
</script>
