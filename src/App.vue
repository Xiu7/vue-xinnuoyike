<template>
  <div id="app">
  <el-container >
  <div class="log">
   </div>
  <el-header style="width:100%" id="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#458B00" text-color="#fff" active-text-color="#ffd04b" >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">新闻资讯 </el-menu-item>
       <el-menu-item index="3">业绩展示</el-menu-item>
      <el-menu-item index="4">技术支持</el-menu-item>
       <el-menu-item index="5">联系我们</el-menu-item>
      <el-menu-item index="6" >管理员登陆</el-menu-item>
    </el-menu>
    </el-header>
   <el-main style="width:100%" id="main">
  <router-view/>
   </el-main>
   <el-footer>
   <p style="font-size:13px;font-weight:bold"> Copyright 2017 北京信诺亿科环境技术有限公司 www.bjsinoeco.com 版权所有 </p>
   	<p style="font-size:13px;font-weight:bold"> 地址：北京市海淀区清华东路16号宝源公寓A2座  邮箱：1061268477@qq.com   </p>
   </el-footer>
     </el-container>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'App',
   data() {
        return {
          activeIndex: ''
                }
      },

      methods: {
        handleSelect(key, keyPath) {
          switch (key) {
                          case '1':
                                this.$router.push("/");
                                break;
                          case '2':
                            this.$router.push("/news");
                            store.state.count=false;
                            break;
                           case '3':
                              this.$router.push("/ach");
                              break;
                           case '4':

                            this.$router.push("/tec");
                            break;
                          case '5':
                            this.$router.push("/rel");
                            break;
                            case '6':
                            this.$router.push("/login");
                            break;}
        },
        handleMenuChange:function(key){
                console.log(name.toString())
              switch (name.toString()) {
                case '1':
                      this.$router.push("/home");
                      break;
                case '2':
                  this.$router.push("/news");
                  break;
                  case '3':
                    this.$router.push("/ach");
                    break;

                 case '4':

                  this.$router.push("/tec");
                  break;
                case '5':
                  this.$router.push("/rel");
                  break;
                case '6':
                            this.$router.push("/login");
                            break;
              }


      }
      }
}
</script>

<style>
body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
      text-align:center
    }
    #header{
     padding: 0;
    }
    #main{
    padding: 0;
    min-height:760px
    }
    .log{
    width:100%;height:120px;background-image:url(../static/images/log123.jpg);
    }
    header{width:100%;transition: all 0.5s ease; background-color: #fff;   }
    header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
    header .el-menu-demo{padding-left:300px;}
    .el-footer{
    margin-bottom:30px
    }


</style>
