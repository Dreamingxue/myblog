
<template>
    <div class="admin-body">
        <header id="header" class="header">
            <div class="top-box navpc">
                <div class="nav-list">
                    <ul class="clearfix">
                        <li class="list-left list-frist"><a href="#/admin">概要</a></li>
                        <li class="list-left"><a href="#/admin/add-article">撰写</a> </li>
                        <li class="list-left"><a href="#/admin/manage-article">文章管理</a></li>
                        <li class="list-right"><a href="#/index" target="_blank">网站</a></li>
                        <li class="list-right"><a href="#/admin/login" @click='leave'>登出</a></l>
                        <li class="list-right"><a href="#/admin/personal">个人中心</a></li>
                    </ul>
                </div>
            </div>
            <div class ='m-header navweb'>
                <div class="m-box">
                    <div class="btn" @click='navbtn'>
                        <div class="btn1"></div>
                        <div class="btn2"></div>
                        <div class="btn3"></div>
                    </div>
                    <ul class="btn-list" v-if='toggle' @click='upup'>
                        <li><a href="#/admin">概要</a></li>
                        <li><a href="#/admin/add-article">撰写</a></li>
                        <li><a href="#/admin/manage-article">文章管理</a></li>
                        <li><a href="#/admin/personal">个人中心</a></li>
                        <li><a href="#/admin/login">登出</a></li>
                        <li><a href="#/index">网站</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <router-view> </router-view>

        <footer>
            <div class='clearfix'></div>
            <div class="footer">
                <p>本站由细雨衔雪构建</p>
            </div>
        </footer>
    </div>
</template>
<script src="../../js/houtai.js"></script>
<script src="../../js/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript">
    export default{
        data(){
            return {
                toggle:false
            }
        },
        mounted(){
            if(window.localStorage.getItem('username')){//判断username是否存在
            }else{
             window.location.href="#/admin/login"
             //console.log('--ddd')
            }
        },
        methods:{
            leave(){
               window.localStorage.removeItem('username')
               //console.log(window.localStorage.removeItem('username'))
            },
            navbtn(){
                this.toggle=!this.toggle
            },
            upup(){
               this.toggle=!this.toggle
            }
        }
    }
</script>
<style type="text/css">
     .clearfix:before,.clearfix:after{
        content:"";
        display:table;
    }
    .clearfix:after{clear:both;}
    .clearfix{
        *zoom:1;/*IE/7/6*/
    }
 /* 页面样式 */
    .admin-body{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        background: #f5e5c1;
        width:100%;
        min-height:700px;
        font:12px/150% Arial,Verdana,"\5b8b\4f53";
        color: #444;
        font-size: 87.5%;
        line-height: 1.5;
    }
    a{
        color: #BBBBBB;
    }
    a:hover{
        color:#fff;
    }
    .header{
        width: 100%;
    }
    @media screen and (max-width: 767px){
        .navpc{
            display:none;
        }
        .m-box{
            margin-top:-42px;
            height:36px;
            width:100%;
            background:#292D33;
            position:relative;
        }
        .m-box>ul{
            padding-left: 0px;
            position:absolute;
            z-index:100;
            margin-top: 19px;
            z-index:10000;
            width:100%;
            text-indent:5%;
            background:#ccc;
        }
        .m-box>ul>li{
            text-align: left;
            list-style: none;
            height:36px;
            line-height:36px;
            border-bottom:1px solid #eee;
            cursor:pointer;
        }
        .m-box>ul>li:hover{
           box-shadow:0 1px 1px 1px #ddd;
           margin-top:2px;
        }
        .m-box>ul>li>a{
            display:block;
            width:100%;
            font-size: 14px;
            color:#5D5F62;
            text-decoration:none;
        }
        .m-box>ul>li:hover >a{
            color:#3A3C3F;
        }
         .m-box>ul>li:hover{
            background:#eee;
        }
        .btn{
            position:relative;
            cursor:pointer;
        }
        .btn>div{
            position:absolute;
            left: 10px;
            width:30px;
            height:4px;
            background:#ddd;
            border-radius:2px;
            margin-top:6px;
        }
        .btn2{
            top: 0px;
        }
        .btn3{
            top: 15px;
        }

    }
    @media screen and (min-width: 768px){
        .nvaweb{
            display: none;
        }
        .top-box{
            padding:0px;
            background: #292D33;
         }
        .header{
            height:36px;
            margin-top:-42px;
            background: #292D33;
        }
        .nav-list>ul{
            padding: 0 10px;
        }
        .nav-list>ul>li{
            list-style:none;
            display:inline-block;
        }
        .nav-list>ul>li:hover{
            background:#202328;
        }
        .nav-list>ul>li>a{
            display: block;
            padding: 0 20px;
            border-right: 1px solid #383D45;
            height: 36px;
            line-height: 36px;
        }
        .list-frist{
            background: #202328;
            color: #fff !@import;
            text-decoration: none;
        }
        .list-frist>a{
            color:#fff;
            font-weight:bold;
        }
        .list-left{
            float: left;
        }
        .list-right{
            float: right;
        }
    }
    .footer{
        margin:10px 0;
    }
</style>