<template>
  <div>
    <div class="content">
      <iframe :src="url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {}
    },
    computed: {
      url() {
        let id = this.$route.params.id
        if (!id) {
          this.$router.back()
          return
        }
        return `http://www.dongqiudi.com/share/article/${id}?id=${id}&type=undefined&refer=m_website`
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .content
    position: fixed
    top: 44px;
    left: 0
    width: 100%
    height: calc(100% - 44px)
    z-index: 100
    iframe
      width: 100%
      height: 100%
</style>
