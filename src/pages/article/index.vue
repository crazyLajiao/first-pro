<template>
    <view>
        <view class="title">{{pageinfo.title}}</view>
        <view class="content" ref='content'>{{pageinfo.content}}</view>
    </view>
</template>
<script>
// import { getUserInfo } from '../../api/getData'
export default {
    data(){
        return {
            userinfo: {},
            pageinfo: {}
        }
    },
    onLoad(option){
        console.log(option,'ooooooo')
        const eventChannel = this.$mp.page.getOpenerEventChannel()
        eventChannel.on('acceptDataFromIndex',(data)=>{
            this.pageinfo = data.item
        })
    },
    mounted(){
        let id = this.$root.$mp.query.id
        console.log(this.$root,'diiiiiiiiiiiiiii')
        // this.getUser(id)
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
        }
    }
}
</script>
<style lang="less" scoped>

</style>