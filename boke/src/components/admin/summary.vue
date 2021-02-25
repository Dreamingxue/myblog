<template>
  <div>
    <div class="main-list .clearfix">
      <div class="new-article item-list">
        <h3>最近发布的文章</h3>
        <ul>
          <li v-for='article in latelyArticles'>
            <span>{{article.data}}</span>
            <a :href="'#/index/'+article.type+'/number='+article.id+'?id='+article._id"
               class="title">{{article.title}}</a>
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
<script type="text/javascript">
  import axios from 'axios'

  export default {
    data() {
      return {
        latelyArticles: {},
        comments: []
      }
    },
    //查找最十条数据
    created() {
      $.ajax({
        url: this.staticURL + 'latelyArticle',
        type: 'GET',
        success: (data) => {
          this.latelyArticles = data
        },
        dataType: 'json',
        error: (xhr, status, error) => {
          this.message = '发送请求失败'
        }
      })
    }
  }
</script>
<style type="text/css" scoped>
  .comment-num {
    font-size: 18px;
    font-weight: 600;
    padding: 30px 0;
    color: #999999;
  }

  .comment-num a {
    font-size: 20px;
    color: #444444;
  }

  ul li {
    list-style-type: none;
  }

  .main-list {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .main-list .item-list {
      float: left;
      width: 50%;
    }
  }

  .main-list h3 {
    font-size: 18px;
    font-weight: 600;
    padding: 30px 0;
  }

  .main-list ul li {
    text-align: left;
    margin-left: 10%;
    padding: 5px;
  }

  .main-list ul li a:hover {
    color: #111;
  }

</style>


