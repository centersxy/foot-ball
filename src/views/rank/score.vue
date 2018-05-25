<template>
  <div class="score">
    <dl>
      <dt>
        <div class="type0"></div>
        <div class="type1">球队</div>
        <div class="type2">场</div>
        <div class="type2">胜</div>
        <div class="type2">负</div>
        <div class="type2">平</div>
        <div class="type3">进/失</div>
        <div class="type3">积分</div>
      </dt>
      <dd v-for="(item, index) in score" :key="index">
        <div class="type2" v-text="++index"></div>
        <div class="type1">
          <img :src="'//img.dongqiudi.com/data/pic/'+item.team_id+'.png'"/>
          <span v-html="item.club_name"></span>
        </div>
        <div class="type2" v-text="item.matches_total">19</div>
        <div class="type2" v-text="item.matches_won">13</div>
        <div class="type2" v-text="item.matches_lost">4</div>
        <div class="type2" v-text="item.matches_draw">2</div>
        <div class="type3" v-text="item.points+'/'+item.goals_against">41/27</div>
        <div class="type3" v-text="item.points"></div>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      score: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    },
//    mounted() {
//      setTimeout(() => {
//        this.$emit('updateScroll')
//      }, 20)
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .score
    h3
      text-align: left
    p
      text-align: left
    dl
      background: #e2e2e2
    font-size: $font-size-medium
  dt
    display: flex
    padding: 10px 0
    border-bottom: 1px solid #d0cece
    text-align: center
  .type0
    flex: 1
    text-align:left
  .type1
    flex: 5
  .type2
    flex: 1
  .type3
    flex: 2
  dd
    display: flex
    border-bottom: 1px solid #d0cece
    padding: 10px 0
    font-siez: $font-size-small
    text-align: center
    position: relative
    .type0
      flex: 1
      text-align:left
    .type1
      flex: 5
      text-align: left
      text-indent: 2rem
      img
        width: 20px
        position: absolute
        top: 8px
        left: 30px
    .type2
      flex: 1
    .type3
      flex: 2
</style>
