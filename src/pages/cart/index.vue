<template>
  <div>
    <div v-if="list.length">

    </div>
    <div class="blank_container" v-else>
      <image class="blank_img" src="../../static/tabs/cart-active.png"></image>
      <text class="blank_text">购物车空空如也，快去逛逛吧</text>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list:[]
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
