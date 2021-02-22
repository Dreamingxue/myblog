<template>
  <div>
    <div class="detail-tips">{{message}}</div>
    <article id="69" class="post">
      <div class="post-head">
        <h1 class="post-title"><a href="##" v-text='detailArticle.title'></a></h1>
        <div class="post-meta">
          <span class="author">作者：<a href="http://unclealan.cn/index.php/author/1/"
                                     v-text='detailArticle.authod'></a></span> •
          <time class="post-date" datetime="2017-05-09T10:51:00+08:00" title="2017年05月09日"
                v-text='detailArticle.data'></time>
        </div>
      </div>
      <!-- 文章 -->
      <div class="post-content" v-html='replaceMethod(detailArticle.content)'></div>
      <!-- 分享页面 -->
      <div class="bdsharebuttonbox">
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
        <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
        <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
        <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
        <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
        <a href="#" class="bds_more" data-cmd="more"></a>
      </div>
      <!-- 分享页面 end -->
      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <span class="icon-folder-open-o"></span>
          <span>{{detailArticle.keyword}}</span>
        </div>
      </footer>
    </article>
    <div id="SOHUCS" :sid="detailArticle._id"></div>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';//先安装再引入
  export default {
    data() {
      return {
        message: '',
        detailArticle: {
          authod: "",
          content: "",
          data: "",
          title: '',
          type: "",
          id: "",
          _id: '',
        },
        shareTitle: ''

      }
    },
    //请求详情页数据，渲染页面
    created() {
      $.ajax({
        url: this.staticURL + 'detailArticle',
        type: 'GET',
        data: {_id: this.$route.query.id},
        success: (data) => {
          //console.log(data)
          this.detailArticle = data
          this.shareTitle = data.title
          //console.log(this.shareTitle)
          this.re();
        },
        dataType: 'json',
        error: (xhr, status, error) => {
          this.message = '发送请求失败'
        }
      })
      //根据缓存值判断，让页面刷新
      if (window.localStorage.getItem("code") && window.localStorage.getItem("code") != "nu") {
        window.localStorage.setItem("code", "nu")
      } else {
        //console.log(33)
        window.localStorage.setItem("code", 1)
        this.$router.go(0)
      }
    },
    methods: {
      //将输入的markdown文档通过解析后再渲染
      replaceMethod(val) {
        var md = new MarkdownIt();
        var result = md.render(val);
        return result
      },
      re() {
        var that = this
        //console.log('-----------',this.shareTitle);
        window._bd_share_config = {
          // 通用设置
          common: {
            bdText: that.shareTitle,
            bdDesc: 'web前端知识',
            bdUrl: `http://shenyuxf.top/blog/#/index/${that.detailArticle.type}/number=${that.detailArticle.id}?id=${that.detailArticle._id}`,
            bdPic: 'http://sucimg.itc.cn/avatarimg/817338430_1497598569561_c55'
          },
          // 分享按钮设置
          share: [{
            "bdSize": 32
          }],
          // 图片分享设置
          image: [{
            viewType: 'list',
            viewPos: 'top',
            viewColor: 'black',
            viewSize: '32',
            viewList: ["qzone", "sqq", "weixin", "tsina", "tqq", "renren"]
          }],
          // 划词分享设置
          selectShare: [{
            "bdselectMiniList": ["qzone", "sqq", "weixin", "tsina", "tqq", "renren"]
          }]
        }
        /* with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];*/
      }
    }
  }
</script>
<style type="text/css" scoped>
  .detail-tips {
    color: #f00;
    text-align: center;
  }

  .post-content {
    word-wrap: break-word;
  }

  @media (max-width: 767px) {
    .post-head .post-title {
      font-size: 16px;
    }

    .post-content {
      font-size: 14px;
    }

    .post-permalink a {
      font-size: 14px;
    }
  }
</style>






