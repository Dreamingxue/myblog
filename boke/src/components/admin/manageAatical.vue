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
               <mu-pagination :total="total" :current="current" @pageChange="handleClick" :pageSize='pageSize' ></mu-pagination>
            </template>
        </div>
    </div>
</template>
<script type="text/javascript">
    import '../../css/manage.css'
    export default{
        data(){
            return {
                tags:'',
                removeTags:'',
                type:'所有分类',
                articles:[],
                message:'',
                show:false,
                total: 10,
                current: 1,
                pageSize:10//规定每页显示条数

            }
        },
        created(){
            //var type=window.localStorage.getItem('type')
            //console.log(type)
            //获取所有文章数据
            $.ajax({
                url:this.staticURL+'myallArticle',
                type:'GET',
                success:(data)=>{
                    this.articles=data
                },
                dataType:'json',
                error:(xhr,status,error)=>{
                    this.message='发送请求失败'
                    this.show=true
                }
            })
            //总条数

            $.ajax({
                url:this.staticURL+'myCount',
                type:'GET',
                success:(data)=>{
                    this.total=data.length
                },
                dataType:'json',
                error:(xhr,status,error)=>{
                   this.message='查找失败'
                    this.show=true
                }
            })

        },
        methods:{
            //分页
            handleClick (newIndex) {
            //当前第几页
            //console.log('page size change event', newIndex)
            if(this.type=='所有分类'){
                $.ajax({
                    url:`${this.staticURL}myallArticle/?page=${newIndex}`,
                    type:'GET',
                    success:(data)=>{
                        this.articles=data;
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='查找失败'
                        this.show=true
                    }
                })
            }else{
                $.ajax({
                    url:`${this.staticURL}selectType/?page=${newIndex}`,
                    data:{type:this.type},
                    type:'GET',
                    success:(data)=>{
                        this.articles=data;
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='查找失败'
                        this.show=true
                    }
                })
            }

            },
            //筛选文章类型
            selectType(){
                //eventBus.$emit('typedata',this.type)
                //window.localStorage.setItem('type',this.type)
                //console.log(this.type)
                if(this.type=='所有分类'){
                    $.ajax({
                        url:this.staticURL+'myallArticle',
                        type:'GET',
                        success:(data)=>{
                            this.articles=data
                        },
                        dataType:'json',
                        error:(xhr,status,error)=>{
                            this.message='查找失败'
                            this.show=true
                        }
                    })

                    $.ajax({
                        url:this.staticURL+'myCount',
                        type:'GET',
                        success:(data)=>{
                            //console.log(1111)
                            this.total=data.length
                        },
                        dataType:'json',
                        error:(xhr,status,error)=>{
                            this.message='查找失败'
                            this.show=true
                        }
                    })

                }else{
                    $.ajax({
                        url:this.staticURL+'selectType',
                        data:{type:this.type},
                        type:'GET',
                        success:(data)=>{
                            this.articles=data
                        },
                        dataType:'json',
                        error:(xhr,status,error)=>{
                            this.message='查找失败'
                            this.show=true
                        }
                    })
                    //获取每种类型数量
                    //
                    $.ajax({
                        url:this.staticURL+'selectTypeCount',
                        data:{type:this.type},
                        type:'GET',
                        success:(data)=>{
                            //console.log(1111)
                            this.total=data.length
                        },
                        dataType:'json',
                        error:(xhr,status,error)=>{
                            this.message=='查找失败'
                            this.show=true
                        }
                    })
                }
            },
            //删除数据
            removeArticle(index){
                $.ajax({
                    url:this.staticURL+'removeArticle',
                    data:{_id:this.articles[index]._id},
                    type:'GET',
                    success:(data)=>{
                        if(data='删除成功'){
                            this.$router.go(0)//重新进入该页面
                        }else{
                            this.message=data
                            this.show=true
                        }
                    },
                    dataType:'text',
                    error:(xhr,status,error)=>{
                        this.message='删除失败'
                        this.show=true
                    }
                })
            },
            //取消筛选
            cancel(){
                this.type='所有分类'
                $.ajax({
                    url:this.staticURL+'myallArticle',
                    type:'GET',
                    success:(data)=>{
                        this.articles=data
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='查找失败'
                        this.show=true
                    }
                })
                $.ajax({
                    url:this.staticURL+'myCount',
                    type:'GET',
                    success:(data)=>{
                        //console.log(1111)
                        this.total=data.length
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='查找失败'
                        this.show=true
                    }
                })
            },
            //添加标签
            addTag(){
                 //添加标签
                $.ajax({
                    url:this.staticURL+'addTags',
                    data:{tags:this.tags},
                    type:'GET',
                    success:(data)=>{
                       if(data.code=1){
                           console.log(data.data[0].tags)
                           this.message=data.data
                           this.show=true
                           setTimeout(()=>{
                            this.show=false
                           },1000)
                       }else if(data.code=0){
                            this.message=data.data
                            this.show=true
                           setTimeout(()=>{
                            this.show=false
                           },1000)
                       }else if(data.code=2){
                            this.message=data.data
                            this.show=true
                            setTimeout(()=>{
                            this.show=false
                           },1000)
                       }
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='发送请求失败'
                    }
                })
                this.tags=''
            },
            removeTag(){
                $.ajax({
                    url:this.staticURL+'removeTags',
                    data:{tags:this.removeTags},
                    type:'GET',
                    success:(data)=>{
                       if(data.code=1){
                           console.log(data.data[0].tags)
                           this.message=data.data
                           this.show=true
                           setTimeout(()=>{
                            this.show=false
                           },1000)
                       }else if(data.code=0){
                            this.message=data.data
                            this.show=true
                           setTimeout(()=>{
                            this.show=false
                           },1000)
                       }else if(data.code=2){
                            this.message=data.data
                            this.show=true
                            setTimeout(()=>{
                            this.show=false
                           },1000)
                       }
                    },
                    dataType:'json',
                    error:(xhr,status,error)=>{
                        this.message='发送请求失败'
                    }
                })
                this.removeTags=''
            }
        }
    }
</script>
<style type="text/css" scoped>
    #fenye>div{
        text-align: center;
        margin: 50px 0;
        margin-left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%) ;
    }
    .tags{
        border-radius: 8px;
        width: 100px;
    }
    @media (min-width: 768px){
        .add-artical{
            width: 25%;
        }
        .tags-box{
            display:inline-block;
        }
    }
    @media (max-width: 767px){
        .add-artical{
            width: 25%;
        }
        .search{
            width: 75%;
            padding-right: 10px;
            text-align: right;
        }
        .tags-box{
            width: 100%;
            padding-bottom: 10px;
        }
        .tags{
            width: 40%;
            margin: 0 2%;
        }
    }
</style>
