<template>
  <view>
    <view class="wrapper" v-if="shoplist.length">
      <view class="shop-wrapper" v-for="(item,index) in shoplist" :key="index">
        <view class="shop-name">
          <icon class="circle" type="circle" size="18"></icon>
          <text class="name">{{item.name}}</text>
        </view>
        <view class="item-container">
          <view class="item-wrapper" v-for="(child,ind) in item.goodlist" :key="ind">
            <image :src="child.imgUrl" class="main_img"></image>
            <view class="right">
              <view class="title">{{child.good_name}}</view>
              <!-- <text class="old-price">{{child.old_price}}</text> -->
              <view class="num">
                <text class="price">¥{{child.price}}</text>
                <text class="desc btn">-</text>
                <text class="detail">{{child.num}}</text>
                <text class="asc btn">+</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="blank_container" v-else>
      <image class="blank_img" src="../../static/tabs/cart-active.png"></image>
      <text class="blank_text">购物车空空如也，快去逛逛吧</text>
    </view>
  </view>
</template>

<script>

export default {
  data () {
    return {
      shoplist:[
        {
          shop_id: 222,
          name: '汪汪汪宠物店',
          goodlist:[
            {
              good_id: 111,
              good_name:' NPM 使用介绍 NPM是随同NodeJS一起安装的包管理工具,能解决NodeJS代码部署上的很多问题',
              type: 'food',
              shop: '汪汪汪宠物店',
              price: 50,
              old_price: 59,
              num: 1,
              imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg",
              store: 2000,
            },{
              good_id: 111,
              good_name:'狗粮',
              type: 'food',
              shop: '汪汪汪宠物店',
              price: 50,
              old_price: 59,
              num:2,
              imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg",
              store: 2000,
            }
          ]
        }
      ]
    }
  },
  mounted(){
    // wx.navigateTo({url:'/pages/login/main'})
  },
  components: {
    
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang='less' scoped>
.wrapper{
  width: 100%;
  margin: 20rpx 15rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .shop-wrapper{
    width: 100%;
    .shop-name{
      display: flex;
      align-items: center;
      margin: 15rpx 0;
      .circle{
      }
      .name{
        margin-left: 10rpx;
        color: #333;
        font-size: 36rpx;
        font-weight: 550;
      }
    }
    .item-container{
      height: 500rpx;
      margin: 30rpx 5rpx;
      display: flex;
      flex-direction: column;
      .item-wrapper{
        height: 100%;
        display: flex;
        margin: 20rpx 20rpx;
        .main_img{
          width: 300rpx;
          height: 100%;
          margin-right: 15rpx;
        }
        .right{
          flex: 1;
          position: relative;
          .title{
            font-size: 30rpx;
            display: -webkit-box;
            margin:5rpx;
            -webkit-line-clamp: 3;
            -webkit-box-orient:vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #333;
          }
          .num{
            position: absolute;
            bottom: 0;
            left:0;
            right:0;
            display: flex;
            margin-top: 20rpx;
            height: 50rpx;
            align-items: center;
            color: gray;
            .price{
              flex: 4;
              font-size: 36rpx;
              font-weight: 550;
              color: red;
            }
            .btn{
              display: inline-block;
              height: 30rpx;
              line-height: 30rpx;
              width: 50rpx;
              // border: 1rpx solid #aaa;
              padding: 5rpx;
              margin: 0 5rpx;
              text-align: center;
              color: #333;
              background: #ddd;
              border-radius: 10rpx;
            }
            .detail{
              flex:1;
              text-align: center;
              font-size: 26rpx;
            }
          }
          
        }
      }
    }
  }
}
.blank_container{
  width: 80%;
  height:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .blank_img{
    width: 100%;
  }
  .blank_text{
    text-align: center;
    font-weight: bold;
    color: #333;
  }
}
</style>
