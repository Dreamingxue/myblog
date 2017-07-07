<template>
    <div>
        <div class="detail-tips">{{message}}</div>
        <article id="69" class="post" >
            <div class="post-head">
                <h1 class="post-title"><a href="##" v-text='detailArticle.title'></a></h1>
                    <div class="post-meta">
                        <span class="author">作者：<a href="http://unclealan.cn/index.php/author/1/" v-text='detailArticle.authod'></a></span> •
                        <time class="post-date" datetime="2017-05-09T10:51:00+08:00" title="2017年05月09日" v-text='detailArticle.data'></time>
                    </div>
            </div>
            <!-- 文章 -->
            <div class="post-content" v-html='replaceMethod(detailArticle.content)'></div>
            <!-- 分享页面 -->
            <div class="bdsharebuttonbox" data-tag="share_1">
                <a class="bds_mshare" data-cmd="mshare"></a>
                <a class="bds_qzone" data-cmd="qzone" href="#"></a>
                <a class="bds_tsina" data-cmd="tsina"></a>
                <a class="bds_baidu" data-cmd="baidu"></a>
                <a class="bds_renren" data-cmd="renren"></a>
                <a class="bds_tqq" data-cmd="tqq"></a>
                <a class="bds_more" data-cmd="more"></a>
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
        <!-- <div id="SOHUCS" sid="请将此处替换为配置SourceID的语句"></div> -->
    </div>
</template>

<script>
    import axios from 'axios'
    import MarkdownIt from 'markdown-it';//先安装再引入
     export default{
        data(){
            return {
                message:'',
                detailArticle:{
                    title:'',
                    authod:"",
                    content:"",
                    data:"",
                    type:"",
                    id:"",
                    _id:''
                }
            }
        },
        //请求详情页数据，渲染页面
        created(){
            //console.log(this.$route.query)
            axios.get('http://localhost:3000/detailArticle',{params:{_id:this.$route.query.id}}).then((data)=>{
                //console.log(data.data)
                this.detailArticle=data.data
            },(err)=>{
                this.message='请求失败'
            })
            //根据缓存值判断，让页面刷新
            console.log(typeof window.localStorage.getItem("code"))
            if(window.localStorage.getItem("code")!="null"){
               // console.log(1111)
               window.localStorage.setItem("code","null")
            }else{
               //console.log(33)
               window.localStorage.setItem("code",1)
               this.$router.go(0)
            }
            this.re()
        },
        methods:{
            //将输入的markdown文档通过解析后再渲染
            replaceMethod(val){
                var md = new MarkdownIt();
                var result = md.render(val);
                return result
            },
            re(){
             //console.log(this.detailArticle.title);
                //console.log('-----------',this.detailArticle.title);
                window._bd_share_config = {
                // 通用设置
                    common : {
                        bdText : this.detailArticle.title,
                        bdDesc : 'web前端知识',
                        bdUrl : 'http://jingmengxue.top/jmx/changyan/cy.html',
                        bdPic : 'http://sucimg.itc.cn/avatarimg/817338430_1497598569561_c55'
                    },
                    // 分享按钮设置
                    share : [{
                        "bdSize" : 16
                    }],
                    // 图片分享设置
                    image : [{

                        viewType : 'list',
                        viewPos : 'top',
                        viewColor : 'black',
                        viewSize : '32',
                        viewList : ['qzone','tsina','huaban','tqq','renren']
                    }],

                    // 划词分享设置
                    selectShare : [{
                        "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
                    }]
                }

            }
        }
        /*mounted(){
            this.re();
        }*/
     }
</script>
<style type="text/css" scoped>
    .detail-tips{
        color: #f00;
        text-align:center;
    }
    .post-content{
        word-wrap:break-word;
    }
     @media (max-width: 767px){
        .post-head .post-title{
            font-size: 16px;
        }
        .post-content{
            font-size: 14px;
        }
        .post-permalink a{
            font-size:14px;
        }
    }
</style>






