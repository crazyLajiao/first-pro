<template>
  <view>
    <view class='user_container' v-if="userInfo">
      <view class='user-content'>
        <view class='content-header'>
          <view class='top-color'></view>
          <view class='header-top'>
            <view class='top-mid'>
              <open-data class="head-avatar" type="userAvatarUrl"></open-data>
              <open-data class="username" type="userNickName"></open-data>
            </view>
          </view>
          <image class='bg' :src="bgPng"></image>
          <view class='header-bottom' bindtap='bindMobile'>
            <view v-if="bindMobile" class='header-bottom-left'>
              <image :src='phonePng'></image>
              <text>绑定手机号</text>
            </view>
            <image v-if="bindMobile" class='header-bottom-right right-arrow' :src='rightPng'></image>
          </view>
        </view>
      </view>
      <!-- 订单 -->
      <view class='content-order content-body'>
        <view class='content-order-top content-view'>
          <view class='order-top-left'>
            <image class='member-icon' :src='orderformPng'></image>
            <text class='member-text'>我的订单</text>
          </view>
          <view class='order-top-right' bindtap='orderAll'>
            <text>查看全部订单</text>
            <image class='order-top-right-img right-arrow' :src='rightPng'></image>
          </view>
        </view>
        <view class='content-order-bottom'>
          <!-- 待付款 -->
          <view bindtap='orderNoPay'>
            <image :src='pendingdeliveryPng'></image>
            <text class='order-text'>待付款</text>
            <text class='order-num' v-if="statusData[1] != 0">{{statusData[1]}}</text>
          </view>
          <!-- 待发货 -->
          <view bindtap='orderNoDelivery'>
            <image :src='pendingdelivery2Png'></image>
            <text>待发货</text>
            <text class='order-num' v-if="(statusData[2] != 0)">{{statusData[2]}}</text>
          </view>
          <!-- 待收货 -->
          <view bindtap='orderNoReceiving'>
            <image :src='pendingdelivery3Png'></image>
            <text>待收货</text>
            <text class='order-num' v-if="(statusData[3] != 0)">{{statusData[3]}}</text>
          </view>
          <!-- 退换货 -->
          <view bindtap='orderReturnBack'>
            <image :src='pendingdelivery4Png'></image>
            <text>退换货</text>
          </view>
        </view>
      </view>
      <view class='content-one content-body'>
        <!-- 优惠券 -->
        <view class='coupon content-view' bindtap='coupon'>
          <image class='member-icon' :src='couponPng'></image>
          <text class='member-text'>我的优惠券</text>
        </view>
        <!-- 我的购物车 -->
        <view class='content-view' bindtap='cart'>
          <image class='member-icon' :src='memberCartPng'></image>
          <text class='member-text'>我的购物车</text>
        </view>
      </view>
      <view class='conten-two content-body'>
        <!-- 我的关注 -->
        <view class='content-view' bindtap='attention'>
          <image class='member-icon' :src='heartPng'></image>
          <text class='member-text'>我的关注</text>
        </view>
        <!-- 我的足迹 -->
        <view class='content-view' bindtap='browsingHistory'>
          <image class='member-icon' :src='footerPng'></image>
          <text class='member-text'>我的足迹</text>
        </view>
      </view>
      <view class='content-four content-body'>
        <!-- 收货地址管理 -->
        <view class='content-view' bindtap='addressManager'>
          <image class='member-icon' :src='setPng'></image>
          <text class='member-text'>收货地址管理</text>
        </view>
        <!-- 会员资料设置 -->
        <view class='content-view' bindtap='setUserInfo'>
          <image class='member-icon' :src='setPng'></image>
          <text class='member-text'>资料设置</text>
        </view>
        <!--
        <view class='content-view' bindtap='setUserInfo'>
          <image class='member-icon' src='../../image/set.png'></image>
          <text class='member-text'>安全中心</text>
        </view>
        -->
      </view>
    </view>
    <!-- <view v-else>
      <button class='redirect' @click='btnClick'>点击授权登录</button>
    </view> -->
  </view>
</template>

<script>
import bgPng from "../../static/images/user/bg.png"
import phonePng from "../../static/images/user/phone.png"
import rightPng from "../../static/images/user/right.png"
import orderformPng from "../../static/images/user/orderform.png"
import pendingdeliveryPng from "../../static/images/user/pendingdelivery.png"
import pendingdelivery2Png from "../../static/images/user/pendingdelivery2.png"
import pendingdelivery3Png from "../../static/images/user/pendingdelivery3.png"
import pendingdelivery4Png from "../../static/images/user/pendingdelivery4.png"
import couponPng from "../../static/images/user/coupon.png"
import memberCartPng from "../../static/images/user/member-cart.png"
import heartPng from "../../static/images/user/heart.png"
import footerPng from "../../static/images/user/footer.png"
import setPng from "../../static/images/user/set.png"
export default {
  data () {
    return {
      bgPng,
      phonePng,
      rightPng,
      orderformPng,
      pendingdeliveryPng,
      pendingdelivery2Png,
      pendingdelivery3Png,
      pendingdelivery4Png,
      couponPng,
      memberCartPng,
      heartPng,
      footerPng,
      setPng,
      userInfo:{},
      statusData: [],
      bindMobile:true
    }
  },
  onShow: function () {
    let that = this
    let token = wx.getStorageSync('token')
    
  },
  onLoad: function(options){
      this.userInfo = wx.getStorageSync('auth')
      console.log('///////',this.userInfo,'0000000')
      if(!this.userInfo){
        wx.navigateTo({
          url: '/pages/login/main',
        })
      }
  },
  components: {
    
  },

  methods: {
     btnClick(){
      wx.navigateTo({
        // url: '/pages/other/authorize/authorize',
        url: '/pages/login/main',
      })
    },
    bindMobile(){
      wx.navigateTo({
        url: '/pages/user/phonenumber/phonenumber',
      })
    },
    orderAll(){
      wx.navigateTo({
        url: '/pages/user/order/order',
      })
    },
    orderNoPay(){
      wx.navigateTo({
        url: '/pages/user/nopay/nopay',
      })
    },
    orderNoDelivery() {
      wx.navigateTo({
        url: '/pages/user/nodelivery/nodelivery',
      })
    },
    orderNoReceiving() {
      wx.navigateTo({
        url: '/pages/user/noreceiving/noreceiving',
      })
    },
    orderReturnBack(){
      wx.navigateTo({
        url: '/pages/user/returnback/returnback',
      })
    },
    coupon(){
      wx.navigateTo({
        url: '/pages/user/coupon/coupon',
      })
    },
    cart() {
      wx.switchTab({
        url: '/pages/cart/index/index',
      })
    },
    attention() {
      wx.navigateTo({
        url: '/pages/user/attention/attention',
      })
    },
    browsingHistory() {
      wx.navigateTo({
        url: '/pages/user/history/history',
      })
    },
    addressManager() {
      wx.navigateTo({
        url: '/pages/user/address/address',
      })
    },
    setUserInfo() {
      wx.navigateTo({
        url: '/pages/user/setinfo/setinfo',
      })
    },
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang="less" scoped>
.top-color{
  height: 30rpx;
  width: 750rpx;
  background: rgb(253, 83, 83)
}
.header-top{
  font-size: 24rpx;
  color: #fff;
  width: 700rpx;
  margin: 0 auto; 
  text-align: center;
  overflow: hidden;
  z-index: 1000;
  position: relative;
}
.header-top>view{
  display: inline-block;
  width: 33%;
}
.top-left{
  float: left;
  margin-top: 50rpx;
}
.recharge{
  width: 116rpx;
  height: 34rpx;
  border-radius: 18rpx;
  border: 2rpx solid #fff;
  margin: 16rpx auto 0;
}
.top-right{
  float: right;
  margin-top: 50rpx;
}
.username{
  font-size: 28rpx;
}
.head-avatar{
  overflow: hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  margin: 0 auto;
}
.remaining-sum, .remainingsum-num, .username, .accumulate-points, .accumulatepoints-num{
  display: block;
  margin-bottom: 6rpx;
}
.remainingsum-num, .accumulatepoints-num{
  font-size: 28rpx;
}
.bg{
  position: absolute;
  width: 750rpx;
  height: 290rpx;
  top: 16rpx;
  left: 0;
  z-index: 100;
}
.header-bottom{
  width: 690;
  padding: 0 30rpx 10rpx;
  overflow: hidden;
  margin-top: 100rpx;
  border-bottom: 16rpx solid #f3f3f3;
}
.header-bottom-left{
  float: left;
  font-size: 28rpx;
  color: #999;
}
.header-bottom-left image{
  width: 40rpx;
  height: 40rpx;
  position: relative;
  left: -6rpx;
}
.header-bottom-left text{
  position: relative;
  margin-left: 20rpx;
  top: -8rpx;
}
.content-body{
  overflow: hidden;
  border-bottom: 16rpx solid #F3F3F3;
}
.header-bottom-right{
  float: right;
}
.member-icon{
  width: 34rpx;
  height: 36rpx;
  margin-right: 12rpx;
  position: relative;
  top: 8rpx;
}
.member-text{
  color: #666;
  font-size: 28rpx;
}
.order-top-left{
  float: left;
}
.order-top-right{
  float: right;
}
.order-top-right text{
  font-size: 24rpx;
  color: #999;
}
.order-top-right-img{
  
  margin-left: 12rpx;
}
.right-arrow{
  width: 14rpx;
  height: 24rpx;
  position: relative;
  top: 2rpx;
}
.content-order-bottom{
  overflow: hidden;
  color: #666; 
  font-size: 24rpx;
  padding: 34rpx 0 20rpx;
}
.content-order-bottom > view{
  width: 25%;
  text-align: center;
  float: left;
  position: relative;
}
.content-order-bottom > view image{
  width: 40rpx;
  height: 36rpx;
}
.content-order-bottom > view text{
  display: block;
}
.order-num{
  display: block;
  width: 24rpx;
  height: 24rpx;
  line-height: 26rpx;
  background-color: #FF3B44;
  color: #fff;
  font-size: 20rpx;
  border-radius: 50%;
  position: absolute;
  right: 64rpx;
  top: -12rpx;
}
.content-body .content-view{
  width: 696rpx;
  height: 60rpx; 
  line-height: 60rpx; 
  padding: 10rpx 30rpx 10rpx 24rpx;
  border-bottom: 2rpx solid #f2f2f2;
}
.content-four{
  border: none;
}
.redirect{
  background-color: #e64340;
  width:70%;
}
</style>
