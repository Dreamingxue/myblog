<template>
    <div>
        <div class="content">
            <section class="change change-name">
                <h3>个人资料</h3>
                <form>
                    <ul >
                        <li>
                            <label >昵称</label><br />
                            <input  name="screenName" type="text" class="text" v-model='nick'>
                            <p>将此项不能留空, 用于后台登陆.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label>
                            个人主页地址</label><br />
                            <input id="url-0-2" name="url" type="text" class="text" v-model='address'>
                            <p>
                            此用户的个人主页地址, 请用 <code>http://</code> 开头.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label >
                            电子邮箱地址 *</label><br />
                            <input  name="mail" type="text" class="text" v-model='email'>
                            <p class="description">
                            电子邮箱地址将作为此用户的主要联系方式.<br />请不要与系统中现有的电子邮箱地址重复.</p>
                        </li>
                    </ul>
                    <ul >
                        <li>
                            <button @click.prevent='changePersonal'>更新我的档案</button>
                            <div class="personal-tips" v-if='toggle'>{{message}}</div>
                        </li>
                    </ul>
                </form>
            </section>
            <section class ="change change-password" >
                <h3>密码修改</h3>
                    <form>
                        <ul >
                            <li>
                                <label >
                                用户密码</label>
                                <input name="password" type="password" v-model='newPassword'>
                                <p>
                                为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <label>
                                用户密码确认</label>
                                <input  name="confirm" type="password"  v-model='confirmPassword'>
                                <p class="description">
                            请确认你的密码, 与上面输入的密码保持一致.</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <button @click.prevent='changePassword'>更新密码</button>
                                <div class="password-tips" v-if='pswToggle'>{{pswmessage}}</div>
                            </li>
                        </ul>
                    </form>
            </section>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    export default{
        data(){
            return{
                message:'',
                toggle:false,
                pswmessage:'',
                pswToggle:false,
                nick:'',
                address:'',
                email:'',
                _id:'',
                password:'',
                admin:'',
                newPassword:'',
                confirmPassword:''
            }
        },
        //实例创建之后渲染数据到界面
        created(){
            axios.get(this.staticURL+'users/personal').then(data => {
                this.nick=data.nick;
                    this.address=data.address;
                    this.email=data.email;
                    this._id=data._id;
            }).catch(error => {
                console.error(error);
            })
            // $.ajax({
            //     url:this.staticURL+'users/personal',
            //     type:'GET',
            //     success:(data)=>{
            //         this.nick=data.nick;
            //         this.address=data.address;
            //         this.email=data.email;
            //         this._id=data._id;
            //     },
            //     dataType:'json',
            //     error:(xhr,status,error)=>{
            //         this.message='发送请求失败'
            //         this.toggle=true
            //     }
            // })
        },
        methods:{
            //更改个人资料数据
            changePersonal(){
                $.ajax({
                    url:this.staticURL+'users/changePersonal',
                    data:{
                        nick:this.nick,
                        address:this.address,
                        email:this.email,
                        _id:this._id
                    },
                    type:'GET',
                    success:(data)=>{
                        this.message=data
                        this.toggle=true
                    },
                    dataType:'text',
                    error:(xhr,status,error)=>{
                        this.message='发送请求失败'
                        this.toggle=true
                    }
                })
            },
            //修改密码
            changePassword(){
                $.ajax({
                    url:this.staticURL+'users/changePassword',
                    data:{
                        admin:this.nick,
                        newPassword:this.newPassword,
                        confirmPassword:this.confirmPassword
                    },
                    type:'POST',
                    success:(data)=>{
                        this.pswmessage=data
                        this.pswToggle=true
                    },
                    dataType:'text',
                    error:(xhr,status,error)=>{
                        this.pswmessage='请求错误'
                        this.pswToggle=true
                    }
                })
            }
        }
    }
</script>
<style type="text/css" scoped>

    ul li {
        list-style:none;
        padding:0;
    }
    ul>li{
        margin-top:4px;
    }
    .content h3{
        font-weight: 600;
        font-size:18px;
        padding-left: 40px;
    }
    .content form ul{
        text-align:left;
    }

    /* 手机屏 */
     @media (max-width: 768px){
        .content{
            width:100%;
        }
        .change{
            width:90%;
            margin:0 auto;
        }
        label {
            display: block;
            margin-bottom: .5em;
            font-weight: bold;

        }
        p{
            margin: .5em 0 0;
            color: #999;
            font-size: .92857em;
        }
        input{
                width: 100%;
                background: #FFF;
                border: 1px solid #D9D9D6;
                padding: 7px;
                border-radius: 2px;
                box-sizing: border-box;
                line-height: normal;
                font-family: inherit;
                font-size: 100%;
                margin: 0;
                margin-top:4px;
                cursor: auto;
        }
        button {
            border: none;
            background-color: #467B96;
            cursor: pointer;
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            border-radius: 2px;
            color: #FFF;
            padding: 0 12px;
            height: 32px;
            text-transform: none;
            font-size: 100%;
            margin-top:30px;
        }

        .change-password{
            margin-top:80px;
        }

    }

    /* pc */
   @media (min-width: 768px){
        .content{
            width:560px;
            margin:0 auto;
        }
        label {
            cursor: default;
            margin-bottom: 4px;
            font-weight: bold;
        }
        p{
            margin: .5em 0 0;
            color: #999;
            font-size: .92857em;
        }
        input{
                width: 100%;
                background: #FFF;
                border: 1px solid #D9D9D6;
                padding: 7px;
                border-radius: 2px;
                box-sizing: border-box;
                line-height: normal;
                font-family: inherit;
                font-size: 100%;
                margin: 0;
                margin-top:4px;
                cursor: auto;
        }
        button {
            border: none;
            background-color: #467B96;
            cursor: pointer;
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            border-radius: 2px;
            color: #FFF;
            padding: 0 12px;
            height: 32px;
            text-transform: none;
            font-size: 100%;
            margin-top:30px;
        }

        .change-password{
            margin-top:80px;
        }
    }

</style>