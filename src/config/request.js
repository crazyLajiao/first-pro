// import { baseUrl } from '../config/env'

export default async (url = '', data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        console.log(data)
        let token
        let user = wx.getStorageSync('user')
        // console.log(user)
        if (user !== '') {
            // token='pax2yg1'
            token = user.token
        }
        // if (data.data) {
        //     data.data.sid = parseInt(ext.attr.sid)
        //     // data.data.sid = 21
        // } else {
        //     // let data = {}
        //     data.data = {}
        //     data.data.sid = parseInt(ext.attr.sid)
        //     // data.data.sid = 21
        // }

        // console.log(JSON.stringify(data.data))
        // url = 'http://api.mall.shaoky.com/' + url
        url = 'http://localhost:3000/' + url
        wx.request({
            url,
            data: data.data,
            method,
            header: {
                'content-type': 'application/json',
                'Authorization': token || '',
                'from': 4
            },
            // header: {'content-type': 'application/x-www-form-urlencoded'},
            success: res => {
                if (res.statusCode === 200) {
                    // console.log(JSON.stringify(res.data))
                    resolve(res.data)
                } else {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none'
                    })
                    if (res.res.statusCode === 401) {
                        wx.removeStorageSync('user')
                        wx.navigateTo({
                            url: '/pages/login/index/main'
                        })
                    }
                    reject(res.data)
                }
                // return resolve(res.data || {})
                // if (showError) {
                // if (res.statusCode < 200 || res.statusCode > 300) {
                //     return reject(res.data || {});
                // }

                // if (Number(res.data.status) !== 0) {
                //     return reject(res.data || {});
                // }
                // }

                // return resolve(res.data || {});
            },
            complete: res => {
                // TODO:
            }
        })
    })
}
// header: {'content-type': 'application/x-www-form-urlencoded'}
