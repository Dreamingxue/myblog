<template>
  <div class="login">
    <div class="message" v-text='message' v-show='myshow'></div>
    <div class="b col-md-12 col-xs-12 login-pc">
      <div class="lg">
        <form>
          <div class="lg_top"></div>
          <div class="lg_main">
            <div class="lg_m_1">
              <input placeholder="admin" class="ur" required v-model='username'>
              <input type="password" required placeholder="password" class="pw" v-model='password'>
            </div>
          </div>
          <div class="lg_foot">
            <button class="bn" @click.prevent='mylogin'>Login In</button>
          </div>
        </form>
      </div>
    </div>
    <div class="content login-mobile">
      <h1 class='i-logo'>登录</h1><br>
      <input type="text" placeholder="请输入用户名" class="text-l w-100" v-model='username' required="required"><br>
      <input type="password" placeholder="请输入密码" class="text-l w-100" v-model='password' required="required"><br>
      <button class="btn w-100" @click.prevent='mylogin'>登录</button>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Store from '../js/store.js'//引入缓存接口
  import { login } from '../api/user';

  export default {
    data() {
      return {
        message: '',
        myshow: false,
        username: '',
        password: ''
      }
    },
    methods: {
      mylogin() {
        login({
          userName: this.username,
          password: this.password
        }).then((res) => {
          const data = res.data;
          if (data.s) {
            window.sessionStorage.setItem('jwttoken', data.d);
            Store.save(this.username); //登录成功后存储缓存
            window.location.href = "#/admin"; //成功后跳转到后台
          } else {
            this.message = data.m;
            this.myshow = true;
            setTimeout(() => {
              that.myshow = false
            }, 1000)
          }
        });
      }
    }

  }
</script>
<style scoped lang="scss">

  .login {
    background: #F5E5C1;

  .message {
    margin-top: -42px;
    width: 100%;
    height: 60px;
    background: rgba(200, 200, 100, 0.4);
    text-align: center;
    line-height: 60px;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    .login-mobile {
      display: none;
    }

    .login-pc {
      margin: -6px auto;
      margin-top: 70px;
      background: #F5E5C1;
    }

    .b {
      font-family: Arial, Helvetica, sans-serif;
      background-size: cover;
      font-size: 13px;
      overflow: hidden;
    }

    img {
      border: 0;
    }

    .lg {
      width: 468px;
      height: 468px;
      margin: 0 auto;
      background: url(/static/img/login_b1g.png) no-repeat;
    }

    .lg_top {
      height: 200px;
      width: 468px;
    }

    .lg_main {
      width: 400px;
      height: 180px;
      margin: 0 25px;
    }

    .lg_m_1 {
      width: 290px;
      height: 100px;
      padding: 60px 55px 20px 55px;
    }

    .ur {
      height: 37px;
      border: 0;
      color: #666;
      width: 236px;
      margin: 4px 28px;
      background: url(/static/img/user.png) no-repeat;
      padding-left: 10px;
      font-size: 16pt;
      font-family: Arial, Helvetica, sans-serif;
    }

    .pw {
      height: 37px;
      border: 0;
      color: #666;
      width: 236px;
      margin: 4px 28px;
      background: url(/static/img/password.png) no-repeat;
      padding-left: 10px;
      font-size: 16pt;
      font-family: Arial, Helvetica, sans-serif;
    }

    .bn {
      width: 330px;
      height: 72px;
      background: url(/static/img/enter.png) no-repeat;
      border: none;
      display: block;
      font-size: 18px;
      color: #FFF;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bolder;
    }

    .lg_foot {
      height: 80px;
      width: 330px;
      padding: 6px 68px 0 68px;
    }
  }

  @media (max-width: 767px) {
    .login-pc {
      display: none;
    }

    .content {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      background: #F6F6F3;
      color: #444;
      font-size: 87.5%;
      line-height: 1.5;
      margin: 0 auto;
      margin-top: 100px;
      width: 88%;
      padding: 20px 0;
      text-align: center;
      vertical-align: middle;
    }

    .i-logo {
      color: #467B96;
      background-size: auto 40px;
    }

    .w-100 {
      width: 70%;
      height: 30px;
      margin-top: 20px;
    }

    .btn {
      height: 40px;
      border: none;
      cursor: pointer;
      border-radius: 2px;
      background-color: #467B96;
      color: #fff;
    }
  }

  @media (min-width: 320px) {
    .content {
      margin-top: 40px;
    }
  }

  @media (min-width: 412px) {
    .content {
      margin-top: 50px;
    }
  }
  }
</style>
