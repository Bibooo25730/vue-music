import axios from 'axios';

let constApi = 'http://music.cpengx.cn/' 
// 获取轮播的api
export async function getBanner(type = 1) {
   let isBol = ''
   await  axios.get(`${constApi}banner?type=${type}`).then(
       response => {
           isBol = response.data
        },
       error => {
         isBol = error.message
            
        }  
    )
    return isBol
    
}
// 获取推荐歌单
export function getMusiclist(limit = 10) {
     return  axios.get(`${constApi}personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylist(id) {
    return axios.get(`${constApi}playlist/detail?id=${id}`)
}

//获取歌词
export function getIslyric(id) {
    return axios.get(`${constApi}lyric?id=${id}`)
}
//搜索返回信息  
export function getsuggest(Keywords) {
    return axios.get(`${constApi}search/suggest?keywords=${Keywords}`)
}
//搜索
export function getSearch(Keywords) {
    return axios.get(`${constApi}search?keywords=${Keywords}`)
}
//手机号密码登录
export function LoginPage(phone, password) {
    return axios.get(`${constApi}login/cellphone?phone=${phone}&password=${password}`)
  
}
// 发送验证码
export function logincaptcha(phone) {
    return axios.get(`${constApi}captcha/sent?phone=${phone}`)
}
//登录验证码
export function captcha(phone, captcha) {
    return axios.get(`${constApi}login/cellphone?phone=${phone}&captcha=${captcha}`)
}
//获取用户详情
export function SendUser(uid) {
    return axios.get(`${constApi}user/detail?uid=${uid}`)
}
// //获取账号信息
// export function Subcont() {
//     return axios.get(`${constApi}mv/url?id=327010&r=1080`)
// }
//获取用户歌单
export function UserPlay(uid) {
    return axios.get(`${constApi}user/playlist?uid=${uid}`)
}
//视频
export function StanMv() {
    return axios.get(`${constApi}mv/url?id=327010&r=1080`)
}
//歌单列表
export function MusicPlayitem(uid) {
    return axios.get(`${constApi}playlist/detail?id=${uid}`)
}
//获取登录状态
export function Mstatus() {
    return axios.get(`${constApi}login/status`)
}
export default {
    getBanner, getMusiclist, getPlaylist, getIslyric,LoginPage,logincaptcha,captcha,SendUser,StanMv,UserPlay, MusicPlayitem,Mstatus
}
