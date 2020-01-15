<template>
    <view>
        <scroll-view class="wrapper" v-if="selectlist.length>0">
          <view class="select-wrapper" v-for="(item,index) in selectlist" :key="index">
            <view class="left">
              <view class="title">{{item.article_title}}</view>
              <view class="labels">
                <span v-for="(lab,i) in item.labels" :key='i'>{{lab}}</span>
              </view>
              <view class="userinfo">
                <image class="user_avatar" :src="item.user_avatar"></image>
                <text class="user_name">{{item.user_name}}</text>
                <icon class="star icte" type="info" size="12"></icon><text class="star_text icte">{{item.star}}</text>
                <icon class="comments icte" type="waiting" size="12"></icon><text class="com_text icte">{{item.comments}}</text>
              </view>
            </view>
            <image :src="item.imgUrl" class="main_img"></image> 
          </view>
            <!-- <view class="select-wrapper" v-for="(item,index) in selectlist" :key="index">
                <view class="select-name">
                <icon class="circle" type="circle" size="18"></icon>
                <text class="name">{{item.name}}</text>
                </view>
                <view class="item-container"> -->
                <!-- <view class="item-wrapper" v-for="(child,ind) in item.goodlist" :key="ind">
                    <image :src="child.imgUrl" class="main_img"></image>
                    <view class="right">
                    <view class="title">{{child.good_name}}</view>
                    <view class="num">
                        <text class="price">¥{{child.price}}</text>
                        <text class="desc btn">-</text>
                        <text class="detail">{{child.num}}</text>
                        <text class="asc btn">+</text>
                    </view>
                    </view>
                </view>
                </view>
            </view> -->
        </scroll-view>
    </view>
</template>
<script>
import { formatNum } from '../../../utils/index'
export default {
    data(){
        return {
            selectlist:[
                {
                    article_id: 1112,
                    labels: ['狗狗','狗粮','hhhhhhhh','狗狗','狗粮','狗狗','狗粮','狗粮','狗狗','狗粮'],
                    article_title: 'env 的核心目的是通过配置得知目标环境的特点，然后只做必要的转换',
                    star: 200000,
                    comments: 50000,
                    user_id: 1,
                    user_name: 'Alita核心目的是通过配置得知目标环境的特点',
                    user_avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
                    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=306848274,3081419636&fm=26&gp=0.jpg',
                },
                {
                    article_id: 1112,
                    labels: ['狗狗','狗粮'],
                    article_title: 'env 的核心目的是通过配置得知目标环境的特点，然后只做必要的转换',
                    star: 200,
                    comments: 50,
                    user_id: 1,
                    user_name: 'Alita',
                    user_avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
                    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=306848274,3081419636&fm=26&gp=0.jpg',
                },
            ]
        }
    },
    mounted(){
      this.selectlist.map(item=>{
        item.star = formatNum(item.star)
        item.comments = formatNum(item.comments)
      })
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.wrapper{
  width: 100%;
  .select-wrapper{
    height: 215rpx;
    margin: 25rpx;
    display: flex;

    // flex-direction: column;
    // justify-content: center;
    .left{
      flex: 1 1 auto;
      position: relative;
      padding: 0 10rpx;
      .title{
        font-size: 28rpx;
        display: -webkit-box;
        margin:5rpx 10rpx 5rpx;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #555;
      }
      .labels{
        display: flex;
        flex-wrap: wrap;
        max-height: 60rpx;
        overflow: hidden;
        span{
          display: inline-block;
          padding: 6rpx;
          margin-left: 25rpx;
          margin-top: 10rpx;
          height: 35rpx;
          line-height: 35rpx;
          font-size: 24rpx;
          border-radius: 10rpx;
          color: #888;
          background: #ddd;
        }
      }
      .userinfo{
        // flex:1;
        position: absolute;
        left: 10rpx;
        bottom: 10rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rpx;
        font-size: 24rpx;
        color: gray;
        .user_avatar{
          width: 45rpx;
          height: 45rpx;
          border-radius: 50%;
        }
        .user_name{
          // flex:1;
          max-width: 210rpx;
          margin-left: 6rpx;
          margin-right:20rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icte{
          display: inline-block;
          // width: 20rpx;
          // float: right;
        }
        .star{
          // flex: 1
        }
        .comments{
          // flex: 1
          margin-left: 10rpx;
        }
        .star_text{
          // flex: 2;
          max-width: 70rpx;
          margin-left: 5rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .com_text{
          // flex: 2;
          max-width: 70rpx;
          margin-left: 5rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      
    }
    
    .main_img{
      width: 400rpx;
      height: 100%;
      border-radius: 25rpx;
      margin-left: 10rpx;
    }
  }
}
</style>