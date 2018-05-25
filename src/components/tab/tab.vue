<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/news">资讯</router-link>
    <router-link tag="div" class="tab-item" to="/match">赛程</router-link>
    <router-link tag="div" class="tab-item" to="video">视频</router-link>
    <router-link tag="div" class="tab-item" to="data">数据</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
 @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    .tab-item
      flex: 1
      text-align: center
      font-size: $font-size-medium-x
      border-bottom: 1px solid #ccc
      &.router-link-active
        color: $color-basic
        border-bottom: 1px solid $color-basic
</style>
