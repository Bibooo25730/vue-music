import Vue from "vue"
import Vuex from "vuex"
import api from "../api/index"

Vue.use(Vuex)

const actions = {
    async Playislyric(content, payload) {
        let result = await api.getIslyric(payload.id)
      
         content.commit('setPlayislyric', result.data.lrc.lyric)
        
    },
    async Login(content, loginPasswrod) {
       
        let result = await api.LoginPage(loginPasswrod.phone, loginPasswrod.password)
        
        if (result.data.code == 200) {
           
            content.state.isLogin = true
            content.state.isLoginState = '登录成功'
            content.commit('setState',content.state.isLoginState)
            content.commit('setisLogin',content.state.isLogin)
        } else {
            content.state.isLoginState = '账号或密码有误'
            content.commit('setState',content.state.isLoginState)
        }
        return result
    },
    // async Sendncode(content, ncode) {
    //     let result = await api.logincaptcha(ncode)
     
    // },
    async Ccaptcha(content, ncode) {
        let result = await api.captcha(ncode.phone,ncode.coded)
         return console.log(result)
    },
    
    async SendUserid(content,uid) {
        // console.log(uid)
        let result = await api.SendUser(uid)
      
        content.commit('setIsUrer',result)  
    },
    async Subcont(content, uid) {
     
        let resule = await api.Subcont(uid)
        return resule
    },
    async StanMv() {
        let result = await api.StanMv()
        return result  
    },
    async UserPl(content,uid) {
        let result = await api.UserPlay(uid)
        return result
    },
    async MusicPlayitem(content,uid) {
        let result = await api.MusicPlayitem(uid)
        return result
    },
    async Mstatu() {
        let result = await api.Mstatus()
        return  result
    }


}
const getters = {

    slyric(state) {
        let arr = state.playislyric.split(/\n/g).map((item) => {
            let min = parseInt(item.slice(1, 3))
            let sec = parseInt(item.slice(4, 6))
           
            let mill = parseInt(item.slice(7, 10))
          
            return {
                min, sec, mill,
                lyric: item.slice(11, item.length),
                content: item,
                time: mill + sec * 1000 + min * 60 * 1000,
                
            }
        })
        arr.forEach((item, i) => {
            
            if(i==0){
                item.pre = 0;
              }else{
                item.pre = arr[i - 1].time
             
              }
        })
     
        return arr
    }
}

const mutations = {
    UpdateTIme(state, value) {
        state.intervalId = setInterval(() => {
            ++state.currentTime
           
       }, 1100)
        state.currentTime = value;
    },
    
    ClearTime(state, value) {
        clearInterval(state.intervalId);
        state.currentTime = value;
    },
    //让传进来的值保存在 state里
    setPlatlist(state, value) {
        state.playlist = value
    },
    pushPlatlist(state, value) {
        state.playlist.push(value)
    },
    setplayCurrentIndex(state, value) {
      
        state.playCurrentIndex = value
    },
    setPlayislyric(state, value) {
        state.playislyric = value

        // let array = [];
        // let result = [];
        // let time = ""
        // let valu = ""
        // let ari = state.playislyric.split("\n")
        // ari.forEach((item) => {
        //     if (item != "") {
        //         array.push(item)
        //     }
        // })
        // ari = array;
        // ari.forEach((item) => {
        //     time = item.split("]")[0];
        //     valu = item.split("]")[1];
        //     //去掉时间里的中括号得到xx:xx.xx
        //     var t = time.slice(1).split(":");
        //     // //将结果压入最终数组
           
        //     result.push([parseInt(t[0]) * 60 + parseFloat(t[1]), valu]);
        //     console.log('@@',result)
        //   });
   

    },
    setisLogin(state, value) {
        state.isLogin = value
    },
    setState(state, value) {
        state.isLoginState = value
    },
    setIsUrer(state, value) {
        // console.log(value)
        state.isUserPage = value
      
    }

}

const state = {
    //当前的音乐时间
    currentTime: 0,
    //歌词
    playislyric: '',
    intervalId: null,
    isLogin: false,
    ncode:'',
    isLoginState: '登录失败',
    //用户信息
    isUserPage: {},
    isShow:true,
    //播放列表
    playlist: [
        {
            name: "念念 (Demo)",
            id: 1844474358,
            al: {
                id: 127307089,
                name: "念念",
                pic: 109951165973260620,
                picUrl: "http://p3.music.126.net/U0CM207z3fgWfQGvVBVQ9g==/109951165973260628.jpg",
                pic_str: "109951165973260628",
            }
        }
    ],
    //当前播放的那首歌 索引值
    playCurrentIndex: 0,

}

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,

})