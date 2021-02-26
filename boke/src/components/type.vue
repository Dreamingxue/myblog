<template>
  <div>
    <div class="index-tips">{{message}}</div>
    <article id="69" class="post" v-for='(article,index) in articles'>
      <div class="post-head">
        <h1 class="post-title"><a href="##">{{article.title}}</a></h1>
        <div class="post-meta">
          <span class="author">作者：<a href="http://unclealan.cn/index.php/author/1/">{{article.author}}</a></span> •
          <time class="post-date" datetime="2017-05-09T10:51:00+08:00" title="2017年05月09日">{{article.date}}</time>
        </div>
      </div>
      <!-- markdown编辑内容渲染 -->
      <div class="post-content">
        <p v-html="replaceMethod(article.content)"></p>
      </div>
      <div class="post-permalink">
        <a :href="'#/index/'+article.type+'/number='+article.id+'?id='+article._id" class="btn btn-default">阅读全文</a>
      </div>

      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <span class="icon-folder-open-o"></span>
          <a href="http://unclealan.cn/index.php/tag/meta/">meta</a> , <a href="http://unclealan.cn/index.php/tag/seo/">seo</a>
          , <a href="http://unclealan.cn/index.php/tag/%E5%85%BC%E5%AE%B9/">兼容</a>
        </div>
      </footer>
    </article>
    <!-- 分页 -->
    <div class="pagination">
      <template>
        <mu-pagination :total="total" :current="current" @pageChange="handleClick" :pageSize='pageSize'></mu-pagination>
      </template>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  //var MarkdownIt = require('markdown-it');
  import MarkdownIt from 'markdown-it';
  import {searchArticle} from "../api/article";
  //先安装再引入
  export default {
    data() {
      return {
        message: '',
        articles: null,
        total: 1,//先设置个默认值
        _id: null,
        current: 1,
        pageSize: 5//规定每页显示条数
      }
    },
    //请求文章

    created() {
      //console.log('-----------',this.$route.query)
      const params = {
        type: this.$route.query.type
      };
      searchArticle(params).then(res => {
        if (res.s) {
          this.articles = res.d.list;
          this.total = res.d.total;
        } else {
          this.$message.error(res.m);
        }
      });
    },
    methods: {
      //将输入的markdown文档通过解析后再渲染
      replaceMethod(val) {
        var md = new MarkdownIt();
        var result = md.render(val);
        return result.substring(0, 100) + '...'//截取文章前100字符
        /*return val.substring(0,100)+'...'//截取文章前100字符*/
      },
      //分页
      handleClick(newIndex) {
        // console.log('--------',newIndex)
        const params = {
          type: this.$route.query.type,
          page: newIndex
        };
        searchArticle(params).then(res => {
          if (res.s) {
            this.articles = res.d.list;
            this.total = res.d.total;
          } else {
            this.$message.error(res.m);
          }
        });
        document.body.scrollTop = 0;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .index-tips {
    color: #f00;
    text-align: center;
  }

  .pagination {
    width: 100%;
  }

  .pagination > div {
    margin: 10px 0;
    margin-left: 50%;
    transform: translate(-50%, -50%);
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
