<template>
  <div id="qianduan">
    <canvas id="#canvas"></canvas>
    <common-header/>
    <!-- end header -->
    <!-- start navigation -->
    <div class="common-main">
      <nav class="main-navigation">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-xs-12">
              <div class="navbar-header">
                            <span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-bars"></i>
                            </span>
              </div>
              <div class="collapse navbar-collapse" id="main-menu">
                <ul class="menu">
                  <li class="nav-current"><a href="#/index">首页</a></li>
                  <li><a :href="'#/type/type'+'?type=前端'" title="前端">前端</a></li>
                  <li><a :href="'#/type/type/'+'?type=后端'" title="后端">后端</a></li>
                  <li><a :href="'#/type/type/'+'?type=服务器'" title="服务器">服务器</a></li>
                  <li><a :href="'#/type/type/'+'?type=手机开发'" title="手机开发">手机开发</a></li>
                  <li><a :href="'#/type/type/'+'?type=工具'" title="工具">工具</a></li>
                  <li><a :href="'#/type/type/'+'?type=MAC'" title="MAC">MAC</a></li>
                  <li><a :href="'#/type/type/'+'?type=其他'" title="其他">其他</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- end navigation -->
      <section class="content-wrap">
        <div class="container">
          <div class="row">
            <main class="col-xs-12 col-sm-12 col-md-8 main-content">
              <router-view></router-view>
            </main>

            <aside class="col-xs-12 col-sm-12 col-md-4 sidebar">
              <!-- start tag cloud widget -->
              <div class="widget">
                <h4 class="title">搜索</h4>
                <div class="content community">
                  <form id="search" role="search">
                    <!-- <label for="s" class="sr-only">搜索关键字</label> -->
                    <input type="text" class="text asearch" placeholder="输入关键字搜索" v-model='keyword'
                           @keyup.13='searchKeyword'>
                  </form>
                </div>
              </div>
              <!-- end tag cloud widget -->

              <!-- start tag cloud widget -->
              <div class="widget">
                <h4 class="title">标签云</h4>
                <div class="content tag-cloud" id="tag-cloud">
                  <a rel="tag" v-for='(value,index) in tags' @click='tagSearch(index)'>{{value}}</a>
                </div>
              </div>
              <!-- end tag cloud widget -->

              <div class="widget widget-dashang">
                <h4 class="title">打赏作者</h4>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="thumbnail">
                        <img src="../assets/img/weixin.png" alt="">
                        <div class="caption alipay">
                          微信支付
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="thumbnail">
                        <img src="../assets/img/zhifubao.png" alt="">
                        <div class="caption weixinpay">
                          支付宝
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      感谢您的打赏，您的打赏将是我书写的动力
                    </div>
                  </div>
                </div>
              </div>
              <!-- start widget -->
              <div class="widget">
                <h4 class="title">作者微博</h4>
                <div class="content">
                  <iframe width="100%" height="550" class="share_self" frameborder="0" scrolling="no"
                          src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=2&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=5753729518&verifier=fd7965e4&dpc=1"></iframe>
                </div>
              </div>
              <!-- end widget -->
            </aside>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <div class="widget">
                <h4 class="title">最新文章</h4>
                <div class="content recent-post">
                  <div class="recent-single-post" v-for='currentArticle in currentArticles'>
                    <a :href="'#/current/'+currentArticle.type+'/number='+currentArticle.id+'?id='+currentArticle._id"
                       class="post-title" v-html='currentArticle.title'>
                    </a>
                    <div class="date" v-html='currentArticle.data'></div>
                  </div>
                  <div class="current-tips" v-text='message'></div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12">
              <div class="widget">
                <h4 class="title">关于我们</h4>
                <div class="content recent-post">
                  <div class="recent-single-post">
                    <a href='#/index/contactAuthod' class="post-title" @click='gotop'>联系作者</a>
                  </div>
                  <div class="recent-single-post">
                    <a href="#index/aboutUs" class="post-title" @click='gotop'>关于我们</a>
                  </div>
                  <div class="recent-single-post">
                    <a href="#/admin" title="进入后台" target="_blank" class="post-title">进入后台</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12">
              <div class="widget">
                <h4 class="title">合作伙伴</h4>
                <div class="content tag-cloud friend-links">
                  <a href="http://www.alloyteam.com/alloyshare/weekly/p/1" target="_blank" title="alloy周刊">alloy周刊</a>
                  <hr>
                  <a href="#/commonWebsite" title="常用网站的整理" target="_blank">WEB开发者常用网站</a>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <span>Copyright &copy; 细雨衔雪的博客</span> |
              <span>由细雨衔雪构建</span>
            </div>
            <div class="col-xs-12">
              <span>皖ICP备testestest号</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部跳转标签 -->
      <a href="#" id="back-to-top"><span class="icon-angle-up"></span></a>
    </div>
  </div>
</template>

<script type="text/javascript">
  import CommonHeader from './header';
  import { searchArticle } from '../api/article';
  import { searchTags } from '../api/tags';

  export default {
    components: {
      CommonHeader
    },
    data() {
      return {
        currentArticles: null,
        message: '',
        keyword: '',
        tags: null,
      }
    },
    created() {
      //请求所有文章数据
      searchArticle().then(data => {
        if (data.s) {
          this.currentArticles = data.d;
        }
      });
      //请求所有标签数据
      searchTags().then(data => {
        if (data.s) {
          this.tags = data.d;
        }
      })

    },
    methods: {
      searchKeyword(urlPath) {
        //console.log(1111)
        this.$router.push({path: '/search/' + this.keyword + '?code=0'})
        this.keyword = null;
      },
      gotop() {
        document.body.scrollTop = 0;
      },
      //跳转空白中转路由
      tagSearch(index) {
        //console.log(this.tag[index])
        this.$router.push({path: '/search/' + this.tags[index] + '?code=0'})
        document.body.scrollTop = 0;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../css/style.css';
  @import '../css/style1.css';

  .common-main {
    /* margin-bottom:-42px; */
    background: #f5e5c1;

    .title-img {
      height: 100px;
      background: url(/static/img/title1.png) no-repeat;
    }

    @media (max-width: 767px) {
      .title-img {
        width: 60%;
        height: 80px;
        background-size: contain;
      }

      .sidebar .title {
        font-size: 16px;
      }

      .navbar-header {
        text-align: center;
      }

      .main-navigation .menu li {
        text-align: left;
      }

      .main-navigation .menu li a {
        color: #333;
      }

      .main-footer .title {
        font-size: 16px;
      }
    }

    @media (min-width: 320px) {
      .main-header1 {
        margin-top: -130px;
      }

      .title-img {
        margin-top: -60px;
        height: 60px;
      }
    }

    @media (min-width: 412px) {
      .main-header1 {
        margin-top: -110px;
      }

      .title-img {
        margin-top: -80px;
        height: 60px;
      }
    }

    @media (min-width: 506px) {
      .main-header1 {
        margin-top: -100px;
      }

      .title-img {
        margin-top: -100px;
        height: 70px;
      }
    }

    @media (min-width: 768px) {
      .title-img {
        height: 100px;
        margin-top: -150px;
        width: 50%;
        background-size: cover;
      }

      .main-header1 {
        height: 1px;
        margin-top: -20px;
      }
    }
  }

</style>
