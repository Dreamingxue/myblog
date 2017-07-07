<template>
    <div>
        <div class='addArticle .clearfix '>
            <div class='addarticle-main'>
                <div class="addarticle-header">
                    <h2>撰写新文章</h2>
                    <input type="text" placeholder="标题" class="addarticle-title" v-model='articleTitle'>
                </div>
                <div id="editor">
                    <mavon-editor style="height: 100%" v-model='content'></mavon-editor>
                </div>
            </div>
            <div class='addarticle-aside clearfix'>
                <form>
                    <div class='item'>
                        <label for="date">日期</label>
                        <input type="date" id="date" value="" placeholder="" v-model='date'>
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
                            <label><input type="checkbox" value="前端" v-model='checkedType'>前端</label><br>
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
            <div class="fabu web">
                <button class="mybtn add btn btn-primary active" role="button" @click='uploadArticle'>发布文章</button>
                <p v-text='message'></p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import '../../css/addArticle.css'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
    export default {
        data(){
          return {
            img_file: {},
            message:'',
            data:'',
            articleTitle:'',
            content:'',
            date:'',
            authod:'',
            keyword:'',
            id:'',
            checkedType:[]
          }
        },
        name: 'app',
        components: {
            mavonEditor
            // or 'mavon-editor': mavonEditor
        },
        methods:{
           // 将输入的数据发到后台存到数据库
            uploadArticle(){
               //console.log(this.checkedType)
                axios.post('http://localhost:3000/addArticle',{
                        articleTitle:this.articleTitle,
                        content:this.content,
                        date:this.date,
                        authod:this.authod,
                        id:this.id,
                        keyword:this.keyword,
                        checkedType:this.checkedType


                }).then((data)=>{
                     this.message=data.data;
                },(err)=>{
                    this.message=data.data;
                })
            }
        }
    }
</script>


