<template>
  <div class="data">
    <!--<ul class="scroll-tab">-->
      <!--<li v-for="(item, index) in this.getdateTab"-->
          <!--:class="current === index ? 'current' : ''"-->
          <!--@click="_getData(item.id)"-->
          <!--:key="index">{{item.label}}</li>-->
    <!--</ul>-->
    <h1>中超-常规赛-积分榜</h1>
    <scroll class="data-content" :data="score" ref="scroll">
      <div>
        <score :score="score" @updateScroll="refreshScroll"></score>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import Score from 'views/rank/score'
  import {getData} from 'api/data'
  import Scroll from 'components/scroll/scroll'
  export default{
    data() {
      return {
        current: 0,
        score: []
      }
    },
    computed: {
      ...mapGetters(['getdateTab'])
    },
    created() {
      this._getData(51)
    },
    methods: {
      _getData(id) {
        getData(id).then((res) => {
          this.score = res[0].rankings
        })
      },
      refreshScroll() {
        this.$refs.scroll.refresh()
      }
    },
    components: {
      Score,
      Scroll
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .data
    width: 100%
    position: fixed
    top: 88px
    bottom: 0
    .scroll-tab
      height: 40px
      display: flex
      line-height: 40px
      background: #eee
      &::after
        content: ''
        height: 0px
        visibility: hidden
        display: block
        clear: both
        font-size: 0
      li
        flex: 1
        color: $color-text
        text-align: center
      .current
        color: $color-basic
        border-bottom: 1px solid $color-basic
        box-sizing border-box
    h1
      color: $color-basic
      font-size: $font-size-large
      text-align: center
      padding: 8px 0
      border-bottom: 1px solid #ccc
    .data-content
      height: calc(100% - 34px)
      overflow: hidden
      position: relative

</style>
