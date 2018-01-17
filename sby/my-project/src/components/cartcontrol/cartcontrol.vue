<template>
  <div class="cartcontorl">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="deleteCart">
        <i class="inner icon-remove_circle_outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      deleteCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count > 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontorl
    font-size: 0
    .cart-decrease
      padding: 6px
      display: inline-block
      &.move-enter-active, &.move-leave-active
        transition: opacity .5s
      &.move-enter, &.move-leave-to
        opacity: 0
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      padding: 6px
      display: inline-block
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

</style>
