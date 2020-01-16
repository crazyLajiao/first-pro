<template>
    <view>this is people page,but no use</view>
</template>
<script>
import { getUserInfo } from '../../api/getData'
export default {
    data(){
        return {
            userinfo: {}
        }
    },
    mounted(){
        let id = this.$root.$mp.query.id
        this.getUser(id)
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