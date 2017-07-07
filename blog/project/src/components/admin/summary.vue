<template>
    <div>
        <div class="comment-num">
           <span>评论数:</span><a href="#SOHUCS" id="changyan_count_unit"><i>0</i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <span>参与数:</span><a href="#SOHUCS" id="changyan_parti_unit"><i>0</i></a>
        </div>
        <div class="main-list .clearfix">
            <div class="new-article item-list">
                <h3>最近发布的文章</h3>
                <ul>
                    <li v-for='article in latelyArticles'>
                        <span>{{article.data}}</span>
                        <a :href="'#/index/'+article.type+'/number='+article.id+'?id='+article._id" class="title">{{article.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="new-reply item-list">
               <h3>最近得到的回复</h3>
                <ul>
                    <li>
                        <span>5.3</span>
                        <a href="#" class="title">fmuncle</a>:
                        找了好久，终于找到了
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="http://assets.changyan.sohu.com/upload/plugins/plugins.count.js"></script>
<script type="text/javascript">
    import axios from 'axios'
    export default{
        data(){
            return{
                latelyArticles:{}
            }
        },
        //查找最十条数据
        created(){
            axios.get('http://localhost:3000/latelyArticle').then((data)=>{
                //console.log(data.data)
                this.latelyArticles=data.data
            },(err)=>{

            })
           /*axios.get('http://changyan.sohu.com/api/2/topic/load?client_id=cyt44yd0u&topic_url=http://localhost:8081/#/index/前端/number=4?id=594bae875f0ec91c38fad018').then((data)=>{
                console.log(1111111111)
                //console.log(data)
            })*/
            $.ajax({
                url:'http://changyan.sohu.com/api/2/topic/load?client_id=cyt44yd0u&topic_url=http://localhost:8081/#/index/前端/number=4?id=594bae875f0ec91c38fad018',//3401621247
                type:'GET',
                success:(data)=>{
                    console.log(data)
                },
                dataType:'jsonp'
            })
        }
    }
</script>
<style type="text/css" scoped>
    .comment-num{
        font-size: 18px;
        font-weight:600;
        padding: 30px 0;
        color: #999999;
    }
    .comment-num a{
        font-size:20px;
        color: #444444;
    }
    ul li{
      list-style-type: none;
    }
    .main-list{
        margin: 0 auto;
    }
    @media (min-width: 768px){
        .main-list .item-list{
            float: left;
            width:50%;
        }
    }

    .main-list h3{
        font-size: 18px;
        font-weight:600;
        padding: 30px 0;
    }
    .main-list ul li{
        text-align: left;
        margin-left:10%;
        padding: 5px;
    }
    .main-list ul li a:hover{
        color:#111;
    }

</style>


