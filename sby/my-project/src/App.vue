<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px border-1px-top">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
    <router-view :seller="seller"/>
    </keep-alive>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  const ERR_OK = 0
  export default {
    name: 'app',
    data () {
      return {
        seller: {
            id: (() => {})
        }
      }
    },
    created () {
      this.getSeller()
    },
    methods: {
      // 获取seller的数据
      getSeller () {
        this.$http.get('/api/seller').then((result) => {
          if (result.data.errno === ERR_OK) {
            this.seller = result.data.data
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      border-1px-top(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
