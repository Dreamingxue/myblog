import Vue from 'vue'
import Router from 'vue-router'
import Atical from '../components/index.vue'
import Login from '../components/login.vue'
import Common from '../components/common.vue'
import Admin from '../components/admin/admin.vue'
import ManageArtical from '../components/admin/manageArtical.vue'
import Summary from '../components/admin/summary.vue'
import AddArticle from '../components/admin/addAtical.vue'
import AlertArticle from '../components/admin/alertArticle.vue'
import Personal from '../components/admin/personal.vue'
import Detail from '../components/detail.vue'
import Type from '../components/type.vue'

import Kong from '../components/kong.vue'
import Kong2 from '../components/kong2.vue'
import Keyword from '../components/keyword.vue'
import Watch from '../components/watch.vue'//关键词搜索中转页面
import AboutUs from '../components/aboutUs.vue'
import ContactAuthod from '../components/contactAuthod.vue'
import Nekwork from '../components/nekwork.vue'
import Error from '../components/error.vue'
Vue.use(Router);

var router=new Router({
    routes:[
        {path:'/',redirect:'/index'},
        //文章跳转用父子路由
        {path:'/index',component:Common,
            children:[
                {path:'',component:Atical},
                {path:'type',component:Type},
                //{path:'backend',component:Backend},//注意路径的上下顺序，越清楚的写在上面
                {path:'search/:keyword',component:Keyword},
                {path:'aboutUs',component:AboutUs},
                {path:'contactAuthod',component:ContactAuthod},
                {path:':type/:id',component:Detail}
            ]
        },
        {path:'/admin/login',component:Login},//登录页
        {path:'/admin',component:Admin,//后台首页
            children:[
                {path:'',component:Summary},
                //文章管理页
                {path:'manage-article',component:ManageArtical},
                {path:'add-article',component:AddArticle},
                {path:'alert-article/:id',component:AlertArticle},
                {path:'personal',component:Personal}
            ]
        },
        {path:'/commonWebsite',component:Nekwork},
        {path:'/search/:keyword',component:Watch},
        {path:'/current/:type/:id',component:Kong},//空模板中转调转，解决同一路由的子路由之间模板无法替换问题
        {path:'/type/:type',component:Kong2},
        {path:'*',component:Error}
    ]
})

export default router;
