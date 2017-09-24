<template>
  <div class="footer">
    <div class="header-lines-decoration">
      <span class="bg-secondary-color"></span>
      <span class="bg-blue"></span>
      <span class="bg-blue-light"></span>
      <span class="bg-orange-light"></span>
      <span class="bg-red"></span>
      <span class="bg-green"></span>
      <span class="bg-secondary-color"></span>
    </div>
    <div class="container content">
      <div class="row">
        <div class="col s4 logo-slogan">
          <div class="logo">
            优燃+
          </div>
          <div class="intro">
            <p>努力成就卓越，卓越造就梦想</p>
            <p>风里雨里，我们在这里等你</p>
          </div>
        </div>
        <div class="col s8">
          <div class="row">
            <div class="col s8">
              <div class="title">团队相关</div>
              <ul class="row">
                <li class="col s6"><router-link to="/service">产品服务</router-link></li>
                <li class="col s6"><router-link to="/about">关于我们</router-link></li>
                <li class="col s6"><router-link to="/contact">联系我们</router-link></li>
                <li class="col s6"><router-link to="/team">我们团队</router-link></li>
                <li class="col s6"><router-link to="/job">招贤纳士</router-link></li>
                <li class="col s6"><router-link to="/step">优燃历程</router-link></li>
              </ul>
            </div>
            <div class="col s4 qrcode">
              <div class="title">关注我们</div>
              <img src="https://ninghao.net/files/images/blog/3040.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-info">
      <p class="center-align">Copyright © uranplus.com<span>|</span>
        <router-link to="/copyright">免责申明</router-link>
        <span>|</span>鄂ICP备130666660号-1
        <span>|</span>QQ咨询:
        <a target="_bl/explorerank" href="" rel="nofollow">99989999</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter',
    data () {
      return {
        msg: '页脚啊'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
