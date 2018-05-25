<template>
  <header class="header" >
    <div class="title">
      <i class="iconfont icon-zuqiu"></i>
      <span>爆炸足球</span>
      <div class="minBtn">
        <i class="iconfont icon-sidebar"  @click="toggle" :open="open" :docked="docked"></i>
      </div>
    </div>
    <slider @toggle="toggle" :open="open" :docked="docked"></slider>
  </header>
</template>

<script type="text/ecmascript-6">
  import slider from 'components/slider/slider'
  export default{
    data() {
      return {
        open: false,
        docked: false
      }
    },
    methods: {
      toggle() {
        if (!this.open) {
          this.open = true
          this.docked = true
        } else {
          this.open = false
          setTimeout(() => {
            this.docked = false
          }, 300)
        }
      }
    },
    components: {
      slider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header
    position: relative
    .title
      height: 44px
      background: $color-basic
      text-align: center
      color: $color-f
      line-height: 44px
      font-size: $font-size-large-x
      .icon-zuqiu
        margin-right 6px
      span
        display: inline-block
      .minBtn
        position: absolute
        top: 0
        right: 0
        .icon-sidebar
          font-size:36px
          vertical-align: middle
</style>
