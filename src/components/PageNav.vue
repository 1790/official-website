<template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <a href="#" class="brand-logo">优燃+</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">关于我们</a></li>
          <li><a href="">产品服务</a></li>
          <li><a href="">我们团队</a></li>
          <li><a href="">招贤纳士</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  data () {
    return {
      prdId: parseInt(Math.random())
    }
  }
}
</script>

