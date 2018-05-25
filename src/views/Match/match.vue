<template>
  <div class="match">
    <scroll class="match-content"
            ref="match"
            :data="matchs"
    >
      <div>
        <h1>比赛</h1>
        <div class="match-list" v-for="(item, index) in matchs" :key="index">
          <h3>{{item.title}}</h3>
          <ul>
            <li class="row" v-for="m in item.item" :key="m.relate_id">
              <div class="team">
                <div>
                  <img v-lazy="m.team_A_logo" width="43">
                </div>
                <p>{{m.team_A_name}}</p>
              </div>
              <div class="info">
                <p>{{m.Start_match}}{{m.match_title}}</p>
                <p>{{m.TVList}}</p>
                <h4 v-text="m.fs_A +' - '+  m.fs_B" v-if="m.fs_A || m.fs_B"></h4>
                <h4 v-else="" v-text="noResult"></h4>
              </div>
              <div class="team">
                <div>
                  <img v-lazy="m.team_B_logo" width="43">
                </div>
                <p>{{m.team_B_name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!matchs.length">
        <loading title="正在加载..."></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getMatch} from 'api/match'
  import {formatYMD, formatDateTime, formatStartTime} from 'common/js/date'
  import Scroll from 'components/scroll/scroll'
  import Loading from 'components/loading/loading'
  
  export default {
    data() {
      return {
        matchs: [],
        noResult: '未开始'
      }
    },
    created() {
      this._getMatch()
    },
    methods: {
      _getMatch() {
        getMatch().then((res) => {
          this._normalMatchData(res.list)
        })
      },
      _normalMatchData(list) {
        this.obj = {}
        list.forEach((item, index) => {
          // 计算+8小时的毫秒数
          var str = item.start_play
          var dates = new Date(str.replace(/-/g, '/'))
          var time = dates.getTime() + 28800000
          item.YMD = formatYMD(time)
          item.Start_match = formatStartTime(time)
          let key = formatYMD(time)
          if (!this.obj[key]) {
            this.obj[key] = {
              title: formatDateTime(time),
              item: []
            }
          }
          this.obj[key].item.push(item)
        })
        // 对象转数组
        for (let i in this.obj) {
          this.matchs.push(this.obj[i])
        }
      },
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .match
    width: 100%
    position: fixed
    top: 88px
    bottom: 0
    .match-content
      height: 100%
      overflow: hidden
    h1
      color: $color-basic
      font-size: $font-size-large
      text-align: center
      padding: 8px 0
    .match-list
      h3
        padding: 5px 0px
        color: $color-dialog-background
        font-size: $font-size-medium
        text-align: center
        background: #e9e9e9
      .row
        display: flex
        justify-content: center
        align-items: center
        border-bottom: 1px solid #ccc
        padding: 10px 0
        text-align: center
        .team
          flex: 2
          p
            font-size: $font-size-medium
            color: $color-dialog-background
        .info
          flex: 3
          p
            font-size: $font-size-small
            color: $color-dialog-background
            line-height: 1.5
          h4
            font-size: $font-size-medium-x
            color: $color-basic
            line-height: 1.5
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
