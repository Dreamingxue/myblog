<template>
  <div>
    <div class='addArticle .clearfix '>
      <div class='addarticle-main'>
        <div class="addarticle-header">
          <h2>撰写新文章</h2>
          <input type="text" placeholder="标题" class="addarticle-title" v-model='articleTitle'>
        </div>
        <div id="editor">
          <mavon-editor style="height: 100%" v-model='content' @change="callbackSave"></mavon-editor>
        </div>
        <div class="fabu">
          <button class="mybtn add btn btn-primary active" role="button" @click='alertArticle'>更新文章</button>
          <p v-text='message'></p>
        </div>
      </div>
      <div class='addarticle-aside'>
        <form>
          <div class='item'>
            <label for="date">日期</label>
            <input type="date" id="date" placeholder="" v-model='date'>
          </div>
          <div class="item">
            <label for="authod">作者</label>
            <input type="text" id="authod" placeholder="作者" v-model='authod'>
          </div>
          <div class="item">
            <label for="myid">文章编号</label>
            <input type="text" id="myid" placeholder="文章编号" v-model='id'>
          </div>
          <div class='item'>
            <label for="keyword">设置关键词</label>
            <input type="text" id="keyword" placeholder="设置关键词" v-model='keyword'>
          </div>
          <div class='type'>
            <p>分类</p>
            <div class='type-list'>
              <label><input type="checkbox" value='前端' v-model='checkedType'>前端</label><br>
              <label><input type="checkbox" value="后端" v-model='checkedType'>后端</label><br>
              <label><input type="checkbox" value="服务器" v-model='checkedType'>服务器</label><br>
              <label><input type="checkbox" value="手机开发" v-model='checkedType'>手机开发</label><br>
              <label><input type="checkbox" value="工具" v-model='checkedType'>工具</label><br>
              <label><input type="checkbox" value="MAC" v-model='checkedType'>MAC</label><br>
              <label><input type="checkbox" value="其他" v-model='checkedType'>其他</label>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    data() {
      return {
        message: '',
        newArticle: {},
        articleTitle: '',
        content: '',
        newContent: '',
        date: '',
        authod: '',
        id: '',
        keyword: '',
        _id: '',
        checkedType: []
      }
    },
    name: 'app',
    components: {
      mavonEditor
      // or 'mavon-editor': mavonEditor
    },
    created() {
      $.ajax({
        url: this.staticURL + 'alertOldArticle',
        data: {_id: this.$route.params.id},
        type: 'GET',
        success: (data) => {
          this.newArticle = data;
          this.articleTitle = this.newArticle[0].title;
          this.content = this.newArticle[0].content;
          this.date = this.newArticle[0].data;
          this.id = this.newArticle[0].id;
          this.authod = this.newArticle[0].authod;
          this.keyword = this.newArticle[0].keyword;
          this.checkedType.unshift(this.newArticle[0].type)
        },
        dataType: 'json',
        error: (xhr, status, error) => {
          this.message = '发送请求失败'
        }
      })
    },

    methods: {
      callbackSave(value, render) {
        //console.log("aaaaaa",render);
        this.content = render;
      },
      // 将输入的数据发到后台存到数据库
      alertArticle() {
        //console.log('-----------',this.$route.params.id)
        //console.log(this.articleTitle)
        $.ajax({
          url: this.staticURL + 'alertArticle',
          data: {
            articleTitle: this.articleTitle,
            content: this.content,
            date: this.date,
            authod: this.authod,
            id: this.id,
            keyword: this.keyword,
            checkedType: this.checkedType,
            _id: this.$route.params.id
          },
          type: 'GET',
          success: (data) => {
            //console.log(1111)
            this.message = data;
          },
          dataType: 'text',
          error: (xhr, status, error) => {
            this.message = '发送请求失败'
          }
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  .tips {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    background: rgba(200, 200, 0, 0.6);
    position: fixed;
    bottom: 0px;
  }

  .addArticle {
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    //border: 1px solid red;
  }

  .clearfix:after {
    clear: both;
  }

  /* IE 6/7 */
  .clearfix {
    zoom: 1;
  }

  .addArticle {
    width: 95%;
    margin: 0 auto;
  }

  .fabu {
    display: block;
  }

  @media screen and (max-width: 767px) {
    .addArticle .addarticle-header h2 {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }
    .addArticle .addarticle-header input {
      width: 100%;
    }
    .addarticle-main .addarticle-header {
      text-align: left;
      padding: 10px 0px;
    }
    .addarticle-aside {
      margin: 10px 0px;
      text-align: left;
    }
    .addarticle-aside .item {
      width: 100%;
      margin-left: 10px;
      padding: 5px 0px;
    }
    .addarticle-aside .item label {
      width: 10%;
      vertical-align: middle;
    }
    .addarticle-aside form .item input {
      width: 80%;
      height: 35px;
    }
    .addarticle-aside p {
      text-align: left;
      padding: 0 10px;
      color: #000;
      font-weight: 600;
      font-size: 12px;
    }
    .addarticle-aside .type-list {
      width: 95%;
      margin: 0 auto;
      height: 200px;
      padding: 10px 10px;
      text-align: left;
      background: #fff;
    }

  }

  @media screen and (min-width: 768px) {
    .addArticle .addarticle-header h2 {
      font-size: 18px;
      font-weight: 600;
    }
    .addarticle-main {
      width: 73%;
      float: left;
    }
    .addarticle-aside {
      width: 25%;
      float: right;
    }
    .addarticle-main .addarticle-header {
      text-align: left;
      padding: 10px 0px;
    }
    .addarticle-main .addarticle-header .addarticle-title {
      width: 100%;
    }
    #editor {
      margin-top: 10px;
      width: 100%;
      height: 580px;
    }
    .mybtn {
      margin: 10px 0;
    }
    .addarticle-aside form {
      margin-top: 60px;
    }

    .addarticle-aside form .item {
      width: 100%;
      margin-bottom: 15px;
    }
    .addarticle-aside form .item label {
      width: 30%;
      padding-right: 5px;
      vertical-align: middle;
    }
    .addarticle-aside form .item input {
      width: 68%;
      height: 35px;
    }
    .addarticle-aside p {
      text-align: left;
      padding: 0 10px;
      color: #000;
      font-weight: 600;
      font-size: 12px;
    }
    .addarticle-aside .type-list {
      width: 95%;
      margin: 0 auto;
      height: 200px;
      padding: 10px 10px;
      text-align: left;
      background: #fff;
    }
  }
</style>


