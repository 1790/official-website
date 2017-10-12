<template>
  <div id="app" style="height: 100%;">
    <div class="page-content">
      <router-view name="PageNav"></router-view>
      <router-view></router-view>
      <div class="footer-space"></div>
    </div>
    <router-view name="PageFooter"></router-view>
  </div>
</template>

<script>

import PageNav from './components/PageNav'
import PageFooter from './components/PageFooter'
export default {
  name: 'app',
}
</script>
