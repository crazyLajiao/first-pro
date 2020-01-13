<template>
  <div>
    this is indextoooooooooo
    <view class='nav-container'>
      <view class="nav-item" v-for="(item,index) in navList" :key="index">
        <image src="item.imgUrl"></image>
        <text>{{item.text}}</text>
      </view>
    </view>
    <scroll-view scroll-y="true" bindscrolltolower="lower" bindscroll="scroll">

    </scroll-view>
  </div>
</template>

<script>
// import card from '@/components/card'

export default {
  data () {
    return {
      navlist:[
        {
          imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg',
          text: '精选文章'
        },
        {
          imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg',
          text: '热门讨论'
        },
        {
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1970330762,216207101&fm=26&gp=0.jpg',
          text: '逛商城'
        },
      ]
      // motto: 'Hello miniprograme',
      // userInfo: {
      //   nickName: 'mpvue',
      //   avatarUrl: 'http://mpvue.com/assets/logo.png'
      // }
    }
  },
  mounted(){
    console.log('???????????')
  },
  components: {
    // card
  },

  methods: {
    lower(e){
      console.log(e)
    },
    scroll(){},
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less" scoped>
.nav-container{
  width: 300rpx;
  height: 100rpx;
  display: flex;
  .nav-item{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image{
      flex: 2
    }
    .text{
      flex:1
    }
  }
}

</style>
