<template>
  <div class="loading">
    <img :src="imgUrl" width="60" height="60">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    },
    data() {
      return {
        imgUrl: require('common/images/loading.gif')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  .loading
    width: 100%
    text-align: center
    .desc
      line-heigh: 20px
      color: #333
      font-size: 14px
</style>
