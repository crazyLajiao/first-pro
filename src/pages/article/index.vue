<template>
    <view>
        <view class="title">{{pageinfo.title}}</view>
        <view class="userinfo">
            <image class="user_avatar" :src="pageinfo.user_avatar"></image>
            <text class="user_name">{{pageinfo.user_name}}</text>
            <icon class="star icte" type="info" size="12"></icon><text class="star_text icte">{{pageinfo.star}}</text>
            <icon class="comments icte" type="waiting" size="12"></icon><text class="com_text icte">{{pageinfo.comments}}</text>
        </view>
        <view class="content" ref='content'>
            <wxParse :content="pageinfo.content"></wxParse>
        </view>
        <view class="comment_container">
            <view class="comment_label">评论: </view>
            <!-- v-if="pageinfo.comments_content&&pageinfo.comments_content.length>0" -->
            <view class="comment_content" > 
                <!-- <view class="user_comment_wrapper" v-for="(com,ind) in pageinfo.comments_content" :key="ind">
                    <view class="user_name">{{com.user_name}}</view> :
                    <view class="user_comment">{{com.content}}</view>
                </view> -->
                <view class="user_comment_wrapper">
                    <view class="user_name">alita</view> :
                    <view class="user_comment">谢谢楼主科普，太有用了~~~~</view>
                </view>
                <view class="user_comment_wrapper">
                    <view class="user_name">alita</view> :
                    <view class="user_comment">谢谢楼主科普，太有用了~~~~</view>
                </view>
                <view class="user_comment_wrapper">
                    <view class="user_name">alita</view> :
                    <view class="user_comment">谢谢楼主科普，太有用了~~~~</view>
                </view>
                <view class="user_comment_wrapper" v-if="isMoreCom">
                    <view class="click_btn" @click="getMore">点击查看更多评论</view>
                </view>
                <view class="user_comment_wrapper" v-if="showMore">
                    <view class="user_name">alita</view> :
                    <view class="user_comment">谢谢楼主科普，太有用了~~~~</view>
                </view>
                <view class="user_comment_wrapper" v-if="showMore">
                    <view class="user_name">alita</view> :
                    <view class="user_comment">谢谢楼主科普，太有用了~~~~</view>
                </view>
            </view>
            <!-- <view class="no_comment" v-else>
                暂时还没有评论哦~
            </view> -->
        </view>
    </view>
</template>
<script>
// import { getUserInfo } from '../../api/getData'
import wxParse from 'mpvue-wxparse'
export default {
    data(){
        return {
            userinfo: {}, 
            pageinfo: {},
            isMoreCom: false,
            showMore: false,
        }
    },
    components:{
        wxParse
    },
    onLoad(option){
        const eventChannel = this.$mp.page.getOpenerEventChannel()
        eventChannel.on('acceptDataFromIndex',(data)=>{
            this.pageinfo = data.item
        })
    },
    mounted(){
        // let id = this.$root.$mp.query.id
        // console.log(this.$root,'diiiiiiiiiiiiiii')
        // this.getUser(id)
        this.pageinfo.content = this.pageinfo.content.replace(/\<p(?!><img)/gi, '<p style="font-size: 30rpx;text-indent:2em;color:#666;margin: 20rpx;" ')
        this.pageinfo.content = this.pageinfo.content.replace(/\<img/gi, '<img style="max-width:90%;height:auto;margin: 0 5%;border-radius:8%" ')

        // if(this.pageinfo.comments_content.length>3){
        if(5>3){
            this.isMoreCom = true
        }
   },
    methods:{
        async getUser(id){
            try{
                let res = await getUserInfo({id})
                if(res.status==1){
                    this.userinfo = res.data[0]
                }else{
                    throw new Error('获取数据失败');
                } 
            }catch(err){
                console.log('获取数据失败', err);
            }
        },
        getMore(){
            this.isMoreCom = false
            this.showMore = true
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size: 34rpx;
        color: #222;
        text-align: center;
    }
    .userinfo{
        margin: 20rpx;
        display: flex;
        align-items: center;
        // justify-content: center;
        padding: 5rpx;
        font-size: 24rpx;
        color: gray;
        .user_avatar{
          width: 45rpx;
          height: 45rpx;
          border-radius: 50%;
        }
        .user_name{
        //   flex:4;
          max-width: 150rpx;
          margin-left: 6rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icte{
          display: inline-block;
        }
        .star{
        //   flex: 1
        margin-left: 30rpx;
        }
        .comments{
        //   flex: 1
        margin-left: 15rpx;
        }
        .star_text{
        //   flex: 2;
          margin-left: 10rpx;
        }
        .com_text{
        //   flex: 2;
          margin-left: 10rpx;
        }
    }
    .comment_container{
        border: 1rpx solid #dee;
        border-radius: 20rpx;
        box-shadow: 5rpx 5rpx 5rpx #edd;
        width: 90%;
        margin: 60rpx auto 50rpx;
        padding: 10rpx 20rpx 20rpx;
        .comment_label{
            font-weight:bold;
            color:#222;
            margin: 10rpx;
        }
        .comment_content{
            font-size: 26rpx;
            color: #666;
            margin-left: 20rpx;
            padding: 0 10rpx; 
            .user_comment_wrapper{
                margin: 10rpx 0;
                .user_name{
                    display: inline-block;
                }
                .user_comment{
                    display: inline-block;
                }
                .click_btn{
                    font-size: 28rpx;
                    color: #ff0000;
                    text-align:center;
                }
            }
        }
        .no_comment{
            font-size:30rpx;
            color: #666;
            text-align: center;
        }
    }
</style>