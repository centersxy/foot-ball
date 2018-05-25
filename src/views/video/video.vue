<template>
  <div class="video">
    <scroll class="video-content"
            :pullup="pullup"
            @scrollToEnd="loadMore"
            :data="video">
      <div>
        <h1>最劲视频</h1>
        <ul class="video-list">
          <router-link tag="li" :to="{name:'Detail',params:{id:item.id}}" v-for="(item, index) in video" :key="index">
            <div class="video-img">
              <img v-lazy="item.litpic" width="95" height="70">
            </div>
            <div class="video-info">
              <p class="desc">{{item.title}}</p>
              <span class="comment">评论: {{item.comments_total}}</span>
            </div>
          </router-link>
        </ul>
        <loading v-show="hasMore"></loading>
      </div>
      <!--<div class="loading-container" v-if="!video.length">-->
        <!--<loading title="正在加载..."></loading>-->
      <!--</div>-->
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getVideo} from 'api/video'
  import Scroll from 'components/scroll/scroll'
  import Loading from 'components/loading/loading'
  
  export default {
    data() {
      return {
        page: 1,
        video: [],
        pullup: true,
        hasMore: true
      }
    },
    created() {
      this._getVideo(this.page)
    },
    methods: {
      loadMore() {
        if (!this.hasMore) {
          return
        }
        this.page++
        getVideo(this.page).then((res) => {
          this.video = [...this.video, ...res.list.articles]
          this._checkMore(res)
        })
      },
      _getVideo(page) {
        this.hasMore = true
        getVideo(page).then((res) => {
          this.video = res.list.articles
          this._checkMore(res)
        })
      },
      _checkMore(data) {
        if (!data.list.articles) {
          this.hasMore = false
          alert('没有数据了')
        }
      }
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
  .video
    width: 100%
    position: fixed
    top: 88px
    bottom: 0
    .video-content
      height: 100%
      overflow: hidden
      position: relative
    h1
      color: $color-basic
      font-size: $font-size-large
      text-align: center
      padding: 8px 0
      border-bottom: 1px solid #ccc
    .video-list
      li
        display: flex
        padding: 10px 0px
        border-bottom: 1px solid #ccc
        .video-img
          width: 110px
          flex: 110px 0 0
          text-align: center
        .video-info
          flex: 1
          position: relative
          p
            font-size: $font-size-medium-x
            color: $color-text
          span
            position: absolute
            right: 5px
            bottom: 3px
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
