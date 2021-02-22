<template>
  <div>

  </div>
</template>
<script type="text/javascript">
  //空白页面中转文章类型页面跳转，解决同一路由公用模板切换问题
  export default {
    data() {
      return {}
    },
    created() {
      //console.log(123321)
      //console.log(this.$route.param)
      this.$router.push({path: '/index/' + this.$route.params.type + '?type=' + this.$route.query.type})
    }
  }
</script>
