import request from '../config/request'

/**
 * 首页 随便看看
 */
export const getRandomList = (data)=>request('random/find',{data})
/**
 * 用户的主页
 */
export const getUserInfo= (data)=>request('users/getUser',{data})

export const wxLogin = (data) => request('wx/register', {data})