<template>
  <div id="app">
    <m-head></m-head>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MHead from 'views/m-head/m-head'
  import Tab from 'components/tab/tab'
  export default {
    name: 'App',
    components: {
      MHead,
      Tab
    }
  }
</script>

<style>
</style>
