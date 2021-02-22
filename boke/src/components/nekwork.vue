<template>
  <div class="nekwork">
    <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.7.2/css/amazeui.min.css">
    <div class="content">
      <!--头部-->
      <header class="am-topbar nav-header">
        <div class="am-container">
          <h1 class="am-topbar-brand">
            <a href="#">WEB开发者常用网站</a>
          </h1>

          <ul class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only navBtn"
              data-am-collapse="{target: '#doc-topbar-collapse'}">
            <li class=""><a href="#/index">博客</a></li>
          </ul>

          <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
              <li class="am-active"><a href="#">列表</a></li>
              <li class=""><a href="#/index">博客</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div class="am-container pp-main nek-main">

        <div class="am-g">
          <!-- pc-nav-tag -->
          <div class="am-u-md-3 pp-aside am-show-md-up">
            <div class="am-sticky-placeholder" style="height: 450px; margin: 0px;">
              <div class="pp-aside-offset" data-am-sticky style="height:100%;overflow:auto;margin: 0px">
                <ul class="am-list am-list-border">
                  <li v-for="(data,index) in data" @click='jump(index)'>
                    <a>
                      <i class="am-icon-external-link am-icon-fw"></i>
                      {{data}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- mobile nav tags -->
          <div class="am-u-md-3 am-show-sm">
            <ul class="am-list am-list-border">
              <li v-for="(data,index) in data" @click='jumpweb(index)'>
                <a>
                  <i class="am-icon-external-link am-icon-fw"></i>
                  {{data}}
                </a>
              </li>
            </ul>
          </div>

          <div class="am-u-md-9">
            <div class="item-list-container">
              <div class="link-box" id="16">
                <h2 class="am-website-cate">教程/文档/WiKi</h2>
                <div>
                  <a href="https://developer.mozilla.org/zh-CN/" title="Mozlilla开发者网络" target="_blank"
                     class="am-website">Mozlilla开发者网络</a>
                  <a href="http://www.runoob.com/" title="菜鸟教程" target="_blank" class="am-website">菜鸟教程</a>
                  <a href="http://wiki.jikexueyuan.com/" title="极客学院Wiki" target="_blank"
                     class="am-website">极客学院Wiki</a>
                  <a href="http://www.kancloud.cn/explore" title="看云(ThinkPHP旗下)" target="_blank" class="am-website">看云(ThinkPHP旗下)</a>
                  <a href="http://www.w3cschool.cn/manual" title="w3cschool文档" target="_blank" class="am-website">w3cschool文档</a>
                  <a href="http://glyphicons.com/" title="Glyphicons(BootStrap内置)" target="_blank" class="am-website">Glyphicons(BootStrap内置)</a>
                  <a href="http://jquery.cuishifeng.cn/" title="jquery在线手册" target="_blank" class="am-website">jquery在线手册</a>
                  <a href="http://css.doyoe.com/" title="CSS3参考手册" target="_blank" class="am-website">CSS3参考手册</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="3">
                <h2 class="am-website-cate">博客门户</h2>
                <div>
                  <a href="http://www.ruanyifeng.com/blog/" title="阮一峰博客" target="_blank" class="am-website">阮一峰博客</a>
                  <a href="http://www.liaoxuefeng.com/" title="廖雪峰的官方网站" target="_blank" class="am-website">廖雪峰的官方网站</a>
                  <a href="http://www.w3cschool.cn/" title="w3cschool中文" target="_blank"
                     class="am-website">w3cschool中文</a>
                  <a href="http://www.helloweba.com/" title="helloweba博客" target="_blank"
                     class="am-website">helloweba博客</a>
                  <a href="http://www.alloyteam.com/" title="AlloyTeam(腾讯前端团队)" target="_blank" class="am-website">AlloyTeam(腾讯前端团队)</a>
                  <a href="https://www.qianduanmei.com/" title="前端美" target="_blank" class="am-website">前端美</a>
                  <a href="http://fanxiaoshuang.com/" title="范小双的博客" target="_blank" class="am-website">范小双的博客</a>
                  <a href="http://www.qdfuns.com/" title="前端网" target="_blank" class="am-website">前端网</a>
                  <a href="http://www.h5course.com/" title="HTML5学堂" target="_blank" class="am-website">HTML5学堂</a>
                  <a href="http://web.jobbole.com/" title="伯乐在线" target="_blank" class="am-website">伯乐在线</a>
                  <a href="http://www.daqianduan.com/" title="大前端" target="_blank" class="am-website">大前端</a>
                  <a href="http://www.lvminghui.cn/" title="前端大全" target="_blank" class="am-website">前端大全</a>
                  <a href="https://www.awesomes.cn/" title="awesomes(各种前端库)" target="_blank" class="am-website">awesomes(各种前端库)</a>
                  <a href="https://segmentfault.com/" title="segmentfault" target="_blank" class="am-website">segmentfault</a>
                  <a href="http://qianduanfan.com/index.php" title="前端范" target="_blank" class="am-website">前端范</a>
                  <a href="http://www.html5dw.com/" title="HTML5梦工厂" target="_blank" class="am-website">HTML5梦工厂</a>
                  <a href="http://www.doyoe.com/" title="杜瑶的世界" target="_blank" class="am-website">杜瑶的世界</a>
                  <a href="https://www.w3cplus.com/" title="w3cplus" target="_blank" class="am-website">w3cplus</a>
                  <a href="http://www.html5tricks.com/" title="HTML5 Tricks" target="_blank" class="am-website">HTML5
                    Tricks</a>
                  <a href="http://www.newbiefly.com/" title="菜鸟要飞" target="_blank" class="am-website">菜鸟要飞</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="18">
                <h2 class="am-website-cate">网站制作平台</h2>
                <div>
                  <a href="https://www.kuaizhan.com/" title="搜狐快站" target="_blank" class="am-website">搜狐快站</a>
                  <a href="https://www.sxl.cn/s#/" title="上线了" target="_blank" class="am-website">上线了</a>
                  <a href="http://h5.baidu.com/" title="百度H5" target="_blank" class="am-website">百度H5</a>
                  <a href="http://www.ih5.cn" title="iH5" target="_blank" class="am-website">iH5</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="21">
                <h2 class="am-website-cate">SSL证书</h2>
                <div>
                  <a href="https://www.pianyissl.com/" title="便宜SSL" target="_blank" class="am-website">便宜SSL</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="4">
                <h2 class="am-website-cate">常用工具</h2>
                <div>
                  <a href="http://www.ico.la/" title="PNG转ICON" target="_blank" class="am-website">PNG转ICON</a>
                  <a href="http://cli.im/" title="草料二维码生成器" target="_blank" class="am-website">草料二维码生成器</a>
                  <a href="http://www.liantu.com/" title="联图网二维码生成器" target="_blank" class="am-website">联图网二维码生成器</a>
                  <a href="http://www.tuhaokuai.com/" title="图好快图片压缩" target="_blank" class="am-website">图好快图片压缩</a>
                  <a href="http://www.secaibi.com/tools/" title="色彩笔图片压缩" target="_blank" class="am-website">色彩笔图片压缩</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="12">
                <h2 class="am-website-cate">面试题</h2>
                <div>
                  <a href="https://www.nowcoder.com/" title="牛客网" target="_blank" class="am-website">牛客网</a>
                  <a href="http://www.101test.com/" title="百一测评" target="_blank" class="am-website">百一测评</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="17">
                <h2 class="am-website-cate">字体图标</h2>
                <div>
                  <a href="http://fontawesome.dashgame.com/" title="FontAwesome" target="_blank" class="am-website">FontAwesome</a>
                  <a href="http://www.iconfont.cn/" title="阿里图标" target="_blank" class="am-website">阿里图标</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="5">
                <h2 class="am-website-cate">开放平台</h2>
                <div>
                  <a href="http://open.weibo.com/" title="新浪微博开放平台" target="_blank" class="am-website">新浪微博开放平台</a>
                  <a href="https://open.weixin.qq.com/" title="微信开放平台" target="_blank" class="am-website">微信开放平台</a>
                  <a href="http://open.qq.com/" title="腾讯开放平台" target="_blank" class="am-website">腾讯开放平台</a>
                  <a href="http://open.baidu.com/" title="百度开放平台" target="_blank" class="am-website">百度开放平台</a>
                  <a href="http://open.taobao.com/" title="淘宝开放平台" target="_blank" class="am-website">淘宝开放平台</a>
                  <a href="https://open.alipay.com/platform/home.htm" title="支付宝(蚂蚁金服)开放平台" target="_blank"
                     class="am-website">支付宝(蚂蚁金服)开放平台</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="6">
                <h2 class="am-website-cate">Typecho</h2>
                <div>
                  <a href="http://typecho.org/" title="Typecho官网" target="_blank" class="am-website">Typecho官网</a>
                  <a href="https://www.typechodev.com/" title="某Typecho的开发博客" target="_blank" class="am-website">某Typecho的开发博客</a>
                  <a href="https://typecho.me/" title="Typecho主题模板站" target="_blank" class="am-website">Typecho主题模板站</a>
                  <a href="http://www.typecho.cc/" title="Typecho之家" target="_blank" class="am-website">Typecho之家</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="7">
                <h2 class="am-website-cate">分享代码</h2>
                <div>
                  <a href="http://www.bshare.cn/" title="bShare" target="_blank" class="am-website">bShare</a>
                  <a href="http://share.baidu.com/" title="百度分享" target="_blank" class="am-website">百度分享</a>
                  <a href="http://www.jiathis.com/" title="JiaThis" target="_blank" class="am-website">JiaThis</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="11">
                <h2 class="am-website-cate">CDN服务</h2>
                <div>
                  <a href="http://www.bootcdn.cn/" title="BootstrapCDN" target="_blank"
                     class="am-website">BootstrapCDN</a>
                  <a href="http://cdn.code.baidu.com/" title="百度静态资源公共库" target="_blank"
                     class="am-website">百度静态资源公共库</a>
                  <a href="http://www.staticfile.org/" title="七牛云公共CDN" target="_blank" class="am-website">七牛云公共CDN</a>
                  <a href="https://cdnjs.com/" title="cdnjs" target="_blank" class="am-website">cdnjs</a>
                  <a href="https://cdnbee.com/" title="CDNBee" target="_blank" class="am-website">CDNBee</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="8">
                <h2 class="am-website-cate">社会化评论系统</h2>
                <div>
                  <a href="http://changyan.kuaizhan.com/" title="畅言" target="_blank" class="am-website">畅言</a>
                  <a href="http://www.uyan.cc/" title="友言" target="_blank" class="am-website">友言</a>
                  <a href="https://gentie.163.com/index.html" title="网易云跟帖" target="_blank" class="am-website">网易云跟帖</a>
                  <a href="http://open.weibo.com/widget/comments.php#_loginLayer_1494475442056" title="微博评论箱"
                     target="_blank" class="am-website">微博评论箱</a>
                </div>
              </div>
              <hr>
              <div class="link-box d_jump" id="9">
                <h2 class="am-website-cate">模板素材</h2>
                <div>
                  <a href="http://www.lanrentuku.com/" title="懒人图库" target="_blank" class="am-website">懒人图库</a>
                  <a href="http://www.sucaijiayuan.com/" title="素材家园" target="_blank" class="am-website">素材家园</a>
                  <a href="http://www.16sucai.com/" title="16素材网（需登录）" target="_blank" class="am-website">16素材网（需登录）</a>
                  <a href="http://www.58pic.com/" title="千图网(需登录)" target="_blank" class="am-website">千图网(需登录)</a>
                  <a href="http://www.cssmoban.com/" title="模板之家" target="_blank" class="am-website">模板之家</a>
                  <a href="http://sc.chinaz.com/" title="chinaz站长素材" target="_blank" class="am-website">chinaz站长素材</a>
                  <a href="http://www.huiyi8.com/" title="绘艺素材" target="_blank" class="am-website">绘艺素材</a>
                  <a href="http://www.17sucai.com/" title="门素材(需积分)" target="_blank" class="am-website">门素材(需积分)</a>
                  <a href="http://www.ui3g.com/" title="优设计" target="_blank" class="am-website">优设计</a>
                </div>
              </div>
              <hr>
              <div class="link-box d_jump" id="10">
                <h2 class="am-website-cate">ICON图标</h2>
                <div>
                  <a href="http://www.easyicon.net/" title="easyicon" target="_blank" class="am-website">easyicon</a>
                  <a href="http://www.iconpng.com/" title="iconpng" target="_blank" class="am-website">iconpng</a>
                  <a href="https://simpleicons.org/" title="svg图标" target="_blank" class="am-website">svg图标</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="14">
                <h2 class="am-website-cate">前端UI框架</h2>
                <div>
                  <a href="http://bootswatch.com/" title="bootstrap的主题" target="_blank"
                     class="am-website">bootstrap的主题</a>
                  <a href="http://www.bootcss.com/" title="bootstrap中文网" target="_blank"
                     class="am-website">bootstrap中文网</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="13">
                <h2 class="am-website-cate">简历平台</h2>
                <div>
                  <a href="http://www.deercv.com/" title="DeerCV萌鹿简历" target="_blank" class="am-website">DeerCV萌鹿简历</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="15">
                <h2 class="am-website-cate">设计</h2>
                <div>
                  <a href="https://isux.tencent.com/" title="腾讯ISUX" target="_blank" class="am-website">腾讯ISUX</a>
                </div>
              </div>
              <hr>
              <div class="link-box" id="20">
                <h2 class="am-website-cate">源代码</h2>
                <div>
                  <a href="http://www.hoogge.com/" title="虎格网" target="_blank" class="am-website">虎格网</a>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
      <footer class="am-footer am-footer-default">
        <div class="am-footer-miscs ">
          <p>由 <a href="#/index" title="UncleAlan" target="_blank" class="">细雨衔雪</a>
            提供技术支持</p>
          <p>Copyright &copy; 细雨衔雪</p>
          <p>皖ICP备17007835号</p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        data: ['教程/文档/WiKi', '博客门户', '网站制作平台', 'SSL证书', '常用工具', '面试题', '字体图标', '开放平台', 'Typecho', '分享代码', 'CDN服务', '社会化评论系统', '模板素材', 'ICON图标', '前端UI框架', '简历平台', '设计', '源代码']
      }
    },
    methods: {
      //pc端锚点调转
      jump(index) {
        var items = document.querySelectorAll('.link-box')
        //console.log(items[index].offsetTop)
        var total = items[index].offsetTop;
        //Chrome
        document.body.scrollTop = total
        // Firefox
        document.documentElement.scrollTop = total
        // Safari
        window.pageYOffset = total

      },
      //mobile锚点跳转
      jumpweb(index) {
        var items = document.querySelectorAll('.link-box')
        //console.log(items[index].offsetTop)
        var total = items[index].offsetTop;
        //Chrome
        document.body.scrollTop = total + 900
        // Firefox
        document.documentElement.scrollTop = total + 900
        // Safari
        window.pageYOffset = total + 900
      }
    }
  }
</script>
<style scoped>
  .content {
    margin: -42px 0 0;
    padding: 0;
  }

  .nav-header {
    background: #f8f8f8;
    position: fixed;
    top: 0;
    z-index: 40;
    width: 100%;
  }

  .navBtn {
    background: #FAFCDB;
    border: none;
    font-weight: 600;
    padding: 0;
  }

  .navBtn li a {
    display: block;
    width: 56px;
    height: 30px;
    line-height: 30px;
  }

  .navBtn li a:hover {
    background: #F5E5C1;
    color: #fff;
  }

  h1 > a {
    color: #000;
  }

  .am-icon-fw {
    text-align: left;
  }

  .am-list li a {
    text-decoration: none;
  }

  .am-list li {
    text-align: left;
  }

  .pp-main {
    position: relative;
  }

  .am-with-topbar-fixed-top {
    padding-top: 60px;
  }

  .am-website-cate {
    padding: 0px 10px;
  }

  .am-website {
    display: inline-block;
    padding: 10px;

  }

  .am-u-md-9 .link-box {
    text-align: left;
  }

  @media (min-width: 641px) {
    .pp-aside {
      position: fixed;
    }

    .nek-main {
      margin-top: 60px;
    }

  }

  @media (min-width: 1200px) {
    .item-list-container {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {

    .am-topbar .am-topbar-brand {
      font-size: 16px;
    }
  }
</style>

