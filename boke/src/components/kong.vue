<template>
  <div>

  </div>
</template>
<script type="text/javascript">
  //空白页面中转最新文章页面跳转
  export default {
    data() {
      return {}
    },
    created() {
      console.log(this.$route.query)
      window.dd = 1
      //console.log(window.dd)
      this.$router.push({path: '/index/' + this.$route.params.type + '/' + this.$route.params.id + '?id=' + this.$route.query.id})
    }
  }
</script>
