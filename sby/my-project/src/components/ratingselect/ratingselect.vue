<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2, $event)" class="block positive"
            :class="{'active': selectType_selectType === 2}">{{desc.all}}
        <span class="count">{{ratings.length}}</span>
      </span>
      <span @click="select(0, $event)" :class="{'active': selectType_selectType === 0}"
            class="block positive">{{desc.positive}}
        <span class="count">{{positive.length}}</span>
      </span>
      <span @click="select(1, $event)" :class="{'active': selectType_selectType === 1}"
            class="block negative">{{desc.negative}}
        <span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent_onlyContent}">
      <i class="icon-check_circle"></i>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0
  const NEGATIVE = 1
  const All = 2
  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: All
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    data () {
      return {
        // 副本 用于修改props传过来的值
        onlyContent_onlyContent: this.onlyContent,
        selectType_selectType: this.selectType
      }
    },
    computed: {
      // 计算推荐个数
      positive () {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE
        })
      },
      //  计算吐槽个数
      negatives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE
        })
      }
    },
    methods: {
      // 切换selectType
      select (type, event) {
        if (!event._constructed) {
          return
        }
        this.selectType_selectType = type
      },
      // 切换onlyContent
      toggleContent (event) {
        if (!event._constructed) {
          return
        }
        this.onlyContent_onlyContent = !this.onlyContent_onlyContent
      }
    },
    watch: {
      // 监听porps传的数据
      selectType (newVal) {
        this.selectType_selectType = newVal
      },
      onlyContent (newVal) {
        this.onlyContent_onlyContent = newVal
      },
      selectType_selectType (newVal) {
        this.$emit('selectTypeChange', newVal)
      },
      onlyContent_onlyContent (newVal) {
        this.$emit('onlyContentChange', newVal)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .ratingselect
    .rating-type
      padding: 18px
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        border-radius: 1px
        color: rgb(77, 85, 93)
        font-size: 12px
        &.active
          color: #fff
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
        .count
          font-size: 8px
          margin-left: 2px
          line-height: 16px

    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: middle
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: middle
        font-size: 12px
</style>
