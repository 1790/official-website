
<template>
  <div id="app">
    <PageNav></PageNav>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>

import PageNav from './components/PageNav'
import PageFooter from './components/PageFooter'
export default {
  name: 'app',
  components: {
    'PageNav': PageNav,
    'PageFooter': PageFooter
  }
}
</script>
