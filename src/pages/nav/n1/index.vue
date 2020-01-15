<template>
    <view>
        <scroll-view class="wrapper" v-if="selectlist.length>0">
          <view class="discuss-wrapper" v-for="(item,index) in selectlist" :key="index">
            <!-- <view class="card"> -->
              <view class="title">{{item.article_title}}</view>
              <view class="userinfo">
                <text class="user_answer">{{item.user_name}} : {{item.user_answer}}</text>
              </view>
              <view class="labels">
                <span>回答</span><span>{{item.comments}}</span>
                <span>关注</span><span>{{item.star}}</span>
              </view>
            <!-- </view> -->
          </view>
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
                    question_id: 1112,
                    article_title: 'env 的核心目的是通过配置得知目标环境的特点，然后只做必要的转换',
                    star: 200000,
                    comments: 50000,
                    user_id: 1,
                    user_name: 'Alita',
                    user_answer: '如上配置将目标设置为 nodejs，并且支持 6.10 及以上的版本。也可以使用 node: current 来支持最新稳定版本。例如箭头函数在 nodejs 6 及以上将不被转化，但如果是 nodejs 0.12 就会被转化了。另外一个有用的配置项是 modules。它的取值可以是 amd, umd, systemjs, commonjs 和 false。这可以让 babel 以特定的模块化格式来输出代码。如果选择 false 就不进行模块化处理。',
                },
                {
                    question_id: 1112,
                    article_title: 'env 的核心目的是通过配置得知目标环境的特点，然后只做必要的转换',
                    star: 200,
                    comments: 50,
                    user_id: 1,
                    user_name: 'Alita',
                    user_answer: '如上配置将目标设置为 nodejs，并且支持 6.10 及以上的版本。也可以使用 node: current 来支持最新稳定版本。例如箭头函数在 nodejs 6 及以上将不被转化，但如果是 nodejs 0.12 就会被转化了。另外一个有用的配置项是 modules。它的取值可以是 amd, umd, systemjs, commonjs 和 false。这可以让 babel 以特定的模块化格式来输出代码。如果选择 false 就不进行模块化处理。',
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
  .discuss-wrapper{
    height: 230rpx;
    margin: 25rpx;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1rpx solid #eee;
    box-shadow: 5rpx 5rpx 15rpx #ccc;
    // .card{
    //   width: 600rpx;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    //   border: 1rpx solid #ccc;
    //   box-shadow: 5rpx 5rpx 5rpx #ccc;
    //   flex: 1 1 auto;
    //   position: relative;
    //   padding: 0 10rpx;
      .title{
        width: 90%;
        flex: 1;
        font-size: 30rpx;
        font-weight: bold;
        margin: 10rpx 20rpx 20rpx 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000;
      }
      .userinfo{
        flex: 3;
        color: #888;
        font-size: 26rpx;
        .user_answer{
            line-height: 34rpx;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient:vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
      }
      
      .labels{
        flex: 1;
        // flex-wrap: wrap;
        // max-height: 60rpx;
        // overflow: hidden;
        span{
          display: inline-block;
          padding: 6rpx;
          margin-left: 15rpx;
          margin-top: 10rpx;
          height: 35rpx;
          line-height: 35rpx;
          font-size: 24rpx;
        //   border-radius: 10rpx;
          color: #555;
        //   background: #ddd;
        }
      }
    //   .userinfo{
    //     // flex:1;
    //     position: absolute;
    //     left: 10rpx;
    //     bottom: 10rpx;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     padding: 5rpx;
    //     font-size: 24rpx;
    //     color: gray;
    //     .user_avatar{
    //       width: 45rpx;
    //       height: 45rpx;
    //       border-radius: 50%;
    //     }
    //     .user_name{
    //       // flex:1;
    //       max-width: 210rpx;
    //       margin-left: 6rpx;
    //       margin-right:20rpx;
    //       overflow: hidden;
    //       text-overflow: ellipsis;
    //       white-space: nowrap;
    //     }
    //     .icte{
    //       display: inline-block;
    //       // width: 20rpx;
    //       // float: right;
    //     }
    //     .star{
    //       // flex: 1
    //     }
    //     .comments{
    //       // flex: 1
    //       margin-left: 10rpx;
    //     }
    //     .star_text{
    //       // flex: 2;
    //       max-width: 70rpx;
    //       margin-left: 5rpx;
    //       overflow: hidden;
    //       text-overflow: ellipsis;
    //       white-space: nowrap;
    //     }
    //     .com_text{
    //       // flex: 2;
    //       max-width: 70rpx;
    //       margin-left: 5rpx;
    //       overflow: hidden;
    //       text-overflow: ellipsis;
    //       white-space: nowrap;
    //     }
    //   }
      
    // }
  }
}
</style>