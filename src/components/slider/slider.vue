<template>
  <div class="slider-bar" :class="{'open': open, 'docked': docked}" @click="toggle">
    <ul>
      <div>
        <img v-lazy="imgSrc" width="100">
        <p>既然点开了 点个赞在走吧</p>
      </div>
    </ul>
    <div class="mask"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTabs} from 'api/news'
  import {mapMutations} from 'vuex'
  export default {
    props: {
      open: {
        type: Boolean,
        default: false
      },
      docked: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tabs: [],
        imgSrc: require('common/images/a80r6q6431094319619.gif')
      }
    },
    created() {
      this._getTabs()
    },
    methods: {
      toggle() {
        this.$emit('toggle')
      },
      _getTabs() {
        getTabs().then((res) => {
          let ret = res.menus.ranking.slice(0, 6)
//          this.$store.commit('updateTab', ret)
          this.updateTab(ret)
        })
      },
      ...mapMutations(['updateTab'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .slider-bar
    position: fixed
    bottom: 0
    right: 0
    left: 0
    top: 0
    visibility: hidden
    z-index: 998
    &::-webkit-scrollbar
      display: none !important
      width: 0 !important
      height: 0 !important
      -webkit-appearance: none
      opacity: 0 !important
    ul
      margin: 0
      float: left
      width: 60%
      height: 100%
      padding: 50px 10px 20px
      background: #2d3044
      position: relative
      -webkit-transform: translate(-100%, 0)
      -moz-transform: translate(-100%, 0)
      -ms-transform: translate(-100%, 0)
      -o-transform: translate(-100%, 0)
      transform: translate(-100%, 0)
      -webkit-transition: transform 0.3s ease
      -moz-transition: transform 0.3s ease
      -ms-transition: transform 0.3s ease
      -o-transition: transform 0.3s ease
      transition: transform 0.3s ease
      &::-webkit-scrollbar
        display: none !important
        width: 0 !important
        height: 0 !important
        -webkit-appearance: none
        opacity: 0 !important
      div
        width: 100%
        position: absolute
        top: 30%
        left: 50%
        text-align: center
        transform: translate(-50%, -30%)
        p
          margin-top: 15px
          color: #fff
          font-size: 16px
        
      li
        font-size: $font-size-large
        margin-top: 20px
        color: $color-f
        &.choose
          color: #f00
    .mask
      width: 100%
      height: 100%
      opacity: 0
      display: none
      background: $color-background-d
      -webkit-transition: opacity 0.3s ease
      -moz-transition: opacity 0.3s ease
      -ms-transition: opacity 0.3s ease
      -o-transition: opacity 0.3s ease
      transition: opacity 0.3s ease
  
  .open
    ul
      -webkit-transform: translate(0)
      -moz-transform: translate(0)
      -ms-transform: translate(0)
      -o-transform: translate(0)
      transform: translate(0)
    .mask
      opacity: 1
  
  .docked
    visibility: visible
    .mask
      display: block
</style>
