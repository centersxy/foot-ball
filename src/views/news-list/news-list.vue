<template>
  <div class="newsContent">
    <div class="news-list">
      <dl v-for="(item, index) in news" :key="index">
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
  </div>
</template>

<script type="text/ecmascript-6">
  import {getNewslist} from 'api/news'
  export default{
    data() {
      return {
        news: []
      }
    },
    created() {
      this._getNews()
    },
    methods: {
      _getNews() {
        getNewslist().then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  .newsContent
    position: fixed
    bottom: 0px
    right: 0px
    left: 0px
    top: 88px
    z-index: 11
    background: #ccc
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
</style>
