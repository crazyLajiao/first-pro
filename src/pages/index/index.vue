<template>
  <div class="con">
    <ul class="nav-container">
      <li class="nav-item" v-for="(item,index) in navlist" :key="index">
        <image :src="item.imgUrl"></image>
        <text>{{item.text}}</text>
      </li>
    </ul>
    <h3 class="see">随便看看</h3>
    <!-- <div></div> -->
    <view class="scroll-container">
      <scroll-view v-if="list.length>0" class="scroll-wrapper" style="height:100%" lower-threshold="100" scroll-y="true" @scrolltolower="lower" @scroll="scroll">
        <view class="item-wrapper" v-for="(item,index) in list" :key="index">
          <view class="item-container">
            <image :src="item.imgUrl" class="main_img"></image>
            <text class="title">{{item.title}}</text>
            <view class="userinfo">
              <image class="user_avatar" :src="item.user_avatar"></image>
              <text class="user_name">{{item.user_name}}</text>
              <icon class="star icte" type="info" size="12"></icon><text class="star_text icte">{{item.star}}</text>
              <icon class="comments icte" type="waiting" size="12"></icon><text class="com_text icte">{{item.comments}}</text>
            </view>
          </view>
        </view>
        <view class="bottomline">没有更多数据了哦~</view>
      </scroll-view>

    </view>
  </div>
</template>

<script>
// import card from '@/components/card'
import {getRandomList} from '../../api/getData'
export default {
  data() {
    return {
      navlist: [
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
          text: "精选文章"
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg",
          text: "热门讨论"
        },
        {
          imgUrl:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1970330762,216207101&fm=26&gp=0.jpg",
          text: "逛商城"
        }
      ],
      list: []
      // list:[
      //   {
      //     artical_id: 200,
      //     imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
      //     title: '给养宠物的你的一封信给养宠物的你的一封信给养宠物的你的一封信',
      //     user_avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
      //     user_id: 3000,
      //     user_name: 'Aliilllll',
      //     star: 200,
      //     comments: 20,
      //   },
      //   {
      //     artical_id: 200,
      //     imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1970330762,216207101&fm=26&gp=0.jpg",
      //     title: '给养宠物的你的一封信给养宠物的你的一封信给养宠物的你的一封信',
      //     user_avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
      //     user_id: 3000,
      //     user_name: 'Aliilllll',
      //     star: 200,
      //     comments: 20,
      //   },
      //   {
      //     artical_id: 200,
      //     imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg",
      //     title: '给养宠物的你的一封信给养宠物的你的一封信给养宠物的你的一封信',
      //     user_avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
      //     user_id: 3000,
      //     user_name: 'Aliilllll',
      //     star: 200,
      //     comments: 20,
      //   },
      // ]
    };
  },
  mounted() {
    this.getList(0,15);
  },
  components: {},

  methods: {
    lower(e) {
      console.log(e);
      
      let skip = this.list.length;
      this.getList(skip,10)
    },
    async getList(skip,limit){
      try{
          const randomList = await getRandomList({skip,limit});
          if (randomList.status == 1) {
              this.list = [...this.list, ...randomList.data];
          }else{
              throw new Error('获取数据失败');
          }
      }catch(err){
          console.log('获取数据失败', err);
      }
      console.log(this.list)
    },
    scroll() {
    }
  },

  created() {}
};
</script>

<style lang='less' scoped>
.con{
// background: yellowgreen;
}
.nav-container {
  height: 200rpx;
  margin: 20rpx;
  display: flex;
  // background: red;
  .nav-item {
    flex: 1;
    padding: 5rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    image {
      flex: 3;
      width:80%;
    }
    text {
      flex: 1;
      margin-top:5rpx;
      text-align: center;
      vertical-align: middle;
      font-size: 34rpx;
      color:#333;
    }
  }
}
.see{
  font-weight: bold;
  margin:50rpx 0rpx 20rpx 20rpx;
}
.scroll-container{
  position: absolute;
  left: 0;
  right:0;
  top: 330rpx;
  bottom:0;
  border-radius: 35rpx;
  overflow: hidden;
  .bottomline{
    font-size: 34rpx;
    color: #666;
    margin: 30rpx;
    text-align: center;

  }
}
.scroll-wrapper{
  display: flex;
  .item-wrapper{
    display: inline-block; 
    width: 45%;
    margin: 0rpx 2.5% 20rpx;
    .item-container{
      width: 100%;
      display: flex;
      flex-direction: column;
      // background: #ccc;
      .main_img{
        width:100%;
        border-radius: 10rpx;
      }
      .title{
        width: 100%;
        font-size: 34rpx;
        color:#333;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        // flex: 2
      }
      .userinfo{
        // flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rpx;
        font-size: 24rpx;
        color: gray;
        .user_avatar{
          // display: inline-block;
          width: 45rpx;
          height: 45rpx;
          border-radius: 50%;
        }
        .user_name{
          flex:4;
          // vertical-align: middle;
          margin-left: 6rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // display: inline-block;
        }
        .icte{
          // float: right;
          // margin-left: 3rpx;
          // margin-right: 3rpx;
          display: inline-block;
        }
        .star{
          flex: 1
        }
        .comments{
          flex: 1
        }
        .star_text{
          flex: 2;
          margin-left: 3rpx;
        }
        .com_text{
          flex: 2;
          margin-left: 3rpx;
        }
      }
    }
  }
}

</style>
