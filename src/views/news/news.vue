<template>
  <div class="news">
    <scroll class="news-content"
            :data="news"
            :pullup="pullup"
            @scrollToEnd="loadMore"
            ref="scroll"
    >
      <div>
        <div class="slider-wrapper" v-if="banners.length">
          <banner-list>
            <div v-for="item in banners" :key="item.picUrl" class="">
              <a>
                <img :src="item.picUrl" class="needsclick" @load="loadImage">
              </a>
            </div>
          </banner-list>
        </div>
        <h3>最新资讯</h3>
        <div class="news-list">
          <dl v-for="(item, index) in news" :key="index" @click="selectItem(item.id)">
            <dt>
              <img v-lazy="item.thumb" width="120" height="90">
            </dt>
            <dd>
              <span class="title">{{item.title}}</span>
              <span class="desc">{{item.description}}</span>
              <span class="disc">评论{{item.comments_total}}</span>
            </dd>
          </dl>
        </div>
        <loading title="正在持续加载..." v-show="loadMoreFlg"></loading>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import BannerList from 'components/banner/banner'
  import {getNewslist} from 'api/news'
  import Scroll from 'components/scroll/scroll'
  import Loading from 'components/loading/loading'
  
  export default {
    data() {
      return {
        banners: [
          {picUrl: require('common/images/1.jpg')},
          {picUrl: require('common/images/2.jpg')},
          {picUrl: require('common/images/3.jpg')},
          {picUrl: require('common/images/4.jpg')}
        ],
        news: [],
        currentPage: 1,
        pullup: true,
        loadMoreFlg: true
      }
    },
    created() {
      this._getNews(1, this.currentPage)
    },
    methods: {
      loadImage() {
        // 当图片加载刷新scroll组件
        if (!this.checkedLoad) {
          this.$refs.scroll.refresh()
          this.checkedLoad = true
        }
      },
      selectItem(id) {
        this.$router.push({
          name: 'Detail',
          params: {
            id: id
          }
        })
      },
      _getNews(tabId, page) {
        getNewslist(tabId, page).then((res) => {
          this.news = this.news.concat(res.articles)
          this.currentPage = res.page
        })
      },
      loadMore() {
        this._getNews(1, ++this.currentPage)
      }
    },
    components: {
      BannerList,
      Scroll,
      Loading
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .news
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
    .news-content
      height: 100%
      overflow: hidden
      position: relative
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      h3
        padding: 15px 0px
        font-size: $font-size-large
        text-align: center
        color: $color-basic
        border-bottom: 1px solid $color-basic
      .news-list
        dl
          display: flex
          padding: 9px 9px
          border-bottom: 1px solid #e9e9e9
          dt
            width: 120px
            flex: 120px 0 0
            margin-right: 15px
          dd
            flex: 1
            display: flex
            flex-direction: column
            .title
              font-size: $font-size-large
              color: #333
              line-height: 28px
            .desc
              color: #888
              font-size: $font-size-medium
              line-height: 22px
            .disc
              text-align: right
              font-size: $font-size-small
    .loading-container
      position: absolute
      bottom: 20%
      width: 100%
</style>
