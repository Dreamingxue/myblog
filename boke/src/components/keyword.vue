<template>
  <div>
    <div class='keyword'>
      <p>包含关键字<span>{{keyword}}</span>的文章</p>
    </div>
    <div class="index-tips">{{message}}</div>
    <article id="69" class="post" v-for='(article,index) in articles'>
      <div class="post-head">
        <h1 class="post-title"><a href="##">{{article.title}}</a></h1>
        <div class="post-meta">
          <span class="author">作者：<a href="http://unclealan.cn/index.php/author/1/">{{article.authod}}</a></span> •
          <time class="post-date" datetime="2017-05-09T10:51:00+08:00" title="2017年05月09日">{{article.data}}</time>
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
          <a :href="'#/index/'+article.type+'/number='+article.id+'?id='+article._id">{{article.keyword}}</a>
        </div>
      </footer>
    </article>
    <!-- 分页 -->
    <div class="pagination">
      <template>
        <el-pagination background :total="total" :current="current" @pageChange="handleClick" :pageSize='pageSize' />
      </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { searchArticle } from '../api/article';
  //var MarkdownIt = require('markdown-it');
  import MarkdownIt from 'markdown-it';//先安装再引入
  export default {
    data() {
      return {
        keyword: '',
        message: '',
        articles: null,
        total: 1,
        _id: null,
        current: 1,
        pageSize: 5//规定每页显示条数
      }
    },
    created() {
      this.keyword = this.$route.params.keyword;
      searchArticle({keyWords: this.keyword}).then(data => {
        if (data.s) {
          this.articles = data.d.list;
          this.total = data.d.total;
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
      handleClick(newIndex) {
        //console.log('--------',newIndex)
        searchArticle({keyword: this.$route.params.keyword, page: newIndex}).then(data => {
          if (data.s) {
            this.articles = data.d;
          }
        });
        document.body.scrollTop = 0;
      }
    },
    watch: {
      '$route': 'created'
    }
  }
</script>
<style type="text/css" scoped>
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

  .keyword {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #FAFCDB;
    margin-bottom: 10px;
  }

  .keyword span {
    font-size: 0.8em;
    color: #d00;
  }

  @media (min-width: 768px) {
    .keyword {
      font-size: 1.9em;
    }
  }

  @media (max-width: 767px) {
    .keyword {
      font-size: 1.4em;
    }
  }

</style>
