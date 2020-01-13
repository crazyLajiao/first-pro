<template>
  <div>
    <ul class="nav-container">
      <li class="nav-item" v-for="(item,index) in navlist" :key="index">
        <image :src="item.imgUrl"></image>
        <text>{{item.text}}</text>
      </li>
    </ul>
    <h3 class="see">随便看看</h3>
    <!-- <div></div> -->
    <scroll-view scroll-y="true" bindscrolltolower="lower" bindscroll="scroll">
      <view class="item-wrapper" v-for="(item,index) in list" :key="index">
        <image :src="item.imgUrl" class="main_img"></image>
        <text class="title">{{item.title}}</text>
        <view class="userinfo">
          <image class="avatar" :src="item.avatar"></image>
          <text class="username">{{item.username}}</text>
          <icon class="stars" type="info" size="40"></icon><text>{{item.stars}}</text>
          <icon class="comments" type="waiting" size="40"></icon><text>{{item.comments}}</text>
        </view>

      </view>
    </scroll-view>
  </div>
</template>

<script>
// import card from '@/components/card'

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
      list:[
        {
          artical_id: 200,
          imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=529811231,3180644869&fm=26&gp=0.jpg",
          title: '给养宠物的你的一封信',
          avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578918043739&di=e205ff935e51f3a99c83a80b2e790515&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190114%2F23%2F1547479704-qeEQxHVvnm.jpg",
          user_id: 3000,
          username: 'Aliilllll',
          stars: 200,
          comments: 20,
        },
      ]
    };
  },
  mounted() {
    console.log("???????????");
  },
  components: {},

  methods: {
    lower(e) {
      console.log(e);
    },
    scroll() {}
  },

  created() {}
};
</script>

<style lang='less' scoped>
.nav-container {
  height: 200rpx;
  margin: 20rpx;
  display: flex;
  background: red;
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
    }
  }
}
.item-wrapper{
  width: 50%;
  display: flex;
  flex-direction: column;
  .main_img{
    width:100%;
    // flex: 1
  }
  .title{
    flex: 2
  }
  .userinfo{
    flex:1;
    .avatar{
      display: inline-block;
      width: 60rpx;
      height: 60rpx;
      border-radius: 50%;
    }
  }
}
</style>
