<template>
  <nav class="nav-transparent">
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/" class="brand-logo">优燃+</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/service">产品服务</router-link></li>
          <li><router-link to="/team">我们团队</router-link></li>
          <li><router-link to="/job">招贤纳士</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNavTransparent',
  data () {
    return {
      prdId: parseInt(Math.random())
    }
  }
}
</script>

