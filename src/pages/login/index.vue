<template>
    <div>
        <button open-type="getUserInfo" class="btn" @getuserinfo="login">授权登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        login(e){
            wx.setStorageSync('auth',e.mp.detail.userInfo)
            console.log(e.mp.detail,'00000000000000')
            this.auth = e.mp.detail.userInfo
            this.checkSession()
        },
        checkSession(){
            let that = this
            wx.checkSession({
                success:res=>{
                    // console.log(res,'ressssssssss')
                    wx.login({
                        success: res=>{
                            if(res.code){
                                console.log('未过期，获取到code---------', res.code)
                                that.getUserInfo(res.code)
                            }else{
                                console.log('获取用户登录态失败！' + res.errMsg)
                            }
                        }
                    })
                },
                fail:(err)=>{
                    wx.login({
                        success: res=>{
                            if(res.code){
                                // console.log(res.code,'ccccccccccc')
                                that.getUserInfo(res.code)
                            }else{
                                wx.showModal({
                                    title: '提示',
                                    content: '获取用户登录失败！',
                                    showCancel: false
                                })
                            }
                        }
                    })
                }
            })
        },
        getUserInfo(code){
            let systemInfo = wx.getSystemInfoSync({
                success: function (res) {
                    return res
                }
            })
            console.log(this.auth,'ssssssssss')
            try {
                // let location = wx.getStorageSync('location')
                // console.log(location,'llllllllll')
                let data = {
                    code: code,
                    nickname: this.auth.nickName,
                    city: this.auth.city,
                    province: this.auth.province,
                    avatarUrl: this.auth.avatarUrl,
                    systemInfo: systemInfo,
                    // latitude: location.latitude,
                    // longitude: location.longitude
                }
                // const res = await wxLogin(data)
                // console.log(res)
                // if (res.code === 40100) {
                //     wx.showToast({
                //         title: res.message,
                //         icon: 'none'
                //     })
                //     wx.navigateTo({url: '../apply/main'})
                //     return
                // }
                // if (res.code === 200) {
                //     wx.setStorageSync('user', res.data.userInfo)
                    wx.switchTab({
                        url: '/pages/index/main'
                    })
                // }
            } catch (err) {
                // wx.setStorageSync('user', res.data.userInfo)
                    wx.switchTab({
                        url: '/pages/index/main'
                    })
                // console.log('settttttttttttttttttt')
                // if (err.code === 440) { // 待审核
                //     wx.navigateTo({url: '../apply/main?state=1'})
                // }
                // if (err.code === 450) { // 拒绝
                //     wx.navigateTo({url: '../apply/main?state=2'})
                // }
                console.log(err,'eeeeeeeeeeeee')
            }
        }
    }
}
</script>
<style scoped>
    .btn{
        width: 80%;
        height:100rpx;
        background: green;
        margin: 0 auto;
        text-align: center;
        vertical-align: center;
        border-radius: 30rpx;
    }
</style>