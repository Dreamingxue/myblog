<template>
  <div class="pc">
    <div class="atical-body">
      <div class='atical-header'>
        <h1>管理文章</h1>
        <div class='row atical-nav'>
          <div class="add-artical ">
            <a href="#/admin/add-article" class="mybtn add btn btn-primary active" role="button">新增</a>
          </div>
          <div class='search '>
            <div class="tags-box">
              <input type="text" class="tags" placeholder="添加标签" v-model='tags' @keyup.13='addTag'>
              <input type="text" class="tags" placeholder="删除标签" v-model='removeTags' @keyup.13='removeTag'>
            </div>
            <select name="所有分类" class="artical-type" v-model='type'>
              <option value="所有分类" selected='selected'>所有分类</option>
              <option value="前端">前端</option>
              <option value="后端">后端</option>
              <option value="服务器">服务器</option>
              <option value="手机开发">手机开发</option>
              <option value="工具">工具</option>
              <option value="MAC">MAC</option>
              <option value="其他">其他</option>
            </select>
            <a class="mybtn select btn btn-default active" role="button" @click='selectType'>筛选</a>
            <a class="mybtn cancel-delete btn btn-default active" role="button" @click='cancel'>取消筛选</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class='manage-artical'>
        <router-view></router-view>
    </div> -->

    <div class="allArticle">
      <table class="table table-bordered">
        <tr class="text-center text-title">
          <th class="text-center">上传日期</th>
          <th class="text-center">标题</th>
          <th class="text-center">作者</th>
          <th class="text-center">编号</th>
          <th class="text-center">类型</th>
          <th class="text-center">关键词</th>
          <th class="text-center">操作</th>
        </tr>
        <tr v-for='(article,index) in articles'>
          <td>{{article.data}}</td>
          <td>{{article.title}}</td>
          <td>{{article.authod}}</td>
          <td>{{article.id}}</td>
          <td>{{article.type}}</td>
          <td>{{article.keyword}}</td>
          <td class="col-last">
            <a :href="'#/admin/alert-article/'+article._id" class="btn btn-primary active" role="button">修改</a>
            <a class="btn btn-default active" role="button" @click='removeArticle(index)'>删除</a>
          </td>
        </tr>
      </table>
      <div class="tips" v-text='message' v-if='show'></div>
    </div>
    <div id='fenye'>
      <template>
        <mu-pagination :total="total" :current="current" @pageChange="handleClick" :pageSize='pageSize'></mu-pagination>
      </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { searchArticle, deleteArticle } from '../../api/article';
  import { addTag, deleteTag, searchTags } from '../../api/tags';
  export default {
    data() {
      return {
        tags: '',
        removeTags: '',
        type: '所有分类',
        articles: [],
        message: '',
        show: false,
        total: 10,
        current: 1,
        pageSize: 10//规定每页显示条数

      }
    },
    created() {
      //var type=window.localStorage.getItem('type')
      //console.log(type)
      //获取所有文章数据
      searchArticle().then(data => {
        if (data.s) {
          this.articles = data.d.list;
          this.total = data.d.total;
        }
      });
    },
    methods: {
      //分页
      handleClick(newIndex) {
        //当前第几页
        //console.log('page size change event', newIndex)
        const search = { type: 'all', page: newIndex };
        if (this.type !== '所有分类') {
          search.type = this.type;
        }
        this.current = newIndex;
        searchArticle(search).then(data => {
          if (data.s) {
            this.articles = data.d.list;
            this.total = data.d.total;
          }
        });
      },
      //筛选文章类型
      selectType() {
        //eventBus.$emit('typedata',this.type)
        //window.localStorage.setItem('type',this.type)
        //console.log(this.type)
        const search = { type: 'all' };
        if (this.type !== '所有分类') {
          search.type = this.type;
        }
        this.current = newIndex;
        searchArticle(search).then(data => {
          if (data.s) {
            this.articles = data.d.list;
            this.total = data.d.total;
          }
        })
      },
      //删除数据
      removeArticle(index) {
        const id = this.articles[index].id;
        deleteArticle(id).then(res => {
          if (res.s) {
            this.$message.info('删除成功~');
          } else {
            this.$message.error(res.m);
          }
        })
      },
      //取消筛选
      cancel() {
        this.type = '所有分类'
        searchArticle().then(res => {
          if (res.s) {
            this.articles = res.d.list;
            this.total = res.d.total;
          }
        })
      },
      //添加标签
      addTag() {
        //添加标签
        const data = {
          tags: this.tags
        };
        addTag(data).then(res => {
          if (res.s) {
            this.$message.info('添加标签成功~');
          } else {
            this.$message.error(res.m);
          }
        });
        this.tags = ''
      },
      removeTag() {
        deleteTag().then(res => {
          if (res.s) {
            this.$message.info('删除标签成功~');
          } else {
            this.$message.error(res.m);
          }
        })
        this.removeTags = ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .allArticle .table {
    width: 100%;
    text-align: center;
    vertical-align: middle;
  }

  .allArticle .table th {
    border: 1px solid #999;
    height: 40px;
    background: #abcdef
  }

  .allArticle .table tr td {
    border: 1px solid #ccc;
    height: 30px;
    padding: 5px;
  }

  @media (min-width: 768px) {
    .pc {
      width: 80%;
      margin: 0 auto;
    }

    .atical-header {
      margin: 30px 0;
    }

    .atical-header .atical-nav {
      margin: 30px 0px;
      text-align: left;
    }

    .atical-header h1 {
      font-size: 20px;
      font-weight: 600;
    }

    .atical-header .mybtn {
      border-radius: 3px;
      padding: 5px 10px;
    }

    .atical-header .add-artical {
      width: 50%;
      float: left;
    }

    .atical-header .search {
      float: right;
    }

    .atical-header .artical-type {
      width: 100px;
      height: 34px;
      border-style: none;
      border-radius: 6px;
    }

    .allArticle .col-last {
      padding: 3px;
    }

    .allArticle .col-last .btn {
      width: 50px;
      height: 30px;
      text-align: center;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 767px) {
    .pc {
      width: 95%;
      margin: 0 auto;
    }

    .atical-header {
      margin: 20px 0;
    }

    .atical-header .mybtn {
      height: 30px;
      padding: 5px 10px;
    }

    .atical-header .artical-type {
      width: 80px;
      height: 30px;
      border-style: none;
      border-radius: 6px;
    }

    .allArticle .col-last {
      padding: 3px;
    }

    .allArticle .col-last .btn {
      width: 40px;
      height: 25px;
      padding: 5px;
      font-size: 12px;
      margin-bottom: 5px;
    }

  }

  @media screen and (min-width: 768px) and (max-width: 912px) {
    .allArticle .col-last .btn {
      width: 40px;
      height: 25px;
      padding: 5px;
      font-size: 12px;
      margin-bottom: 5px;
    }
  }

  #fenye > div {
    text-align: center;
    margin: 50px 0;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  .tags {
    border-radius: 8px;
    width: 100px;
  }

  @media (min-width: 768px) {
    .add-artical {
      width: 25%;
    }

    .tags-box {
      display: inline-block;
    }
  }

  @media (max-width: 767px) {
    .add-artical {
      width: 25%;
    }

    .search {
      width: 75%;
      padding-right: 10px;
      text-align: right;
    }

    .tags-box {
      width: 100%;
      padding-bottom: 10px;
    }

    .tags {
      width: 40%;
      margin: 0 2%;
    }
  }
</style>
