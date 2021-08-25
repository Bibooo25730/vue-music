<template>
  <div class="Playcontainer">
    <div :to="{path:'/Playmusic',query:{music:playlist[playCurrentIndex]}}" class="left"  @click="isShow=!isShow" >
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="context">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
        <div class="tips">横滑可以切换上下首歌</div>
      </div>
    </div>
    <div class="right">
    <svg v-if="isPlay" class="icon" @click="clickPlay"  aria-hidden="true">
      <use xlink:href="#icon-bofang1"></use>
    </svg>
    <svg v-else  class="icon" @click="clickPlay"  aria-hidden="true">
      <use xlink:href="#icon-weibiaoti--"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gedan"></use>
    </svg>
  </div>
  <Playmusic :playmusic="playlist[playCurrentIndex]" :clickPlay="clickPlay"  @back="isShow=!isShow"  @clopop='isPL'  :isPlay="isPlay"  v-show="isShow"></Playmusic>
  <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
</div>
</template>

<script>
import Playmusic from "./Playmusic"
import { mapState} from "vuex";
export default {
  name: "Playcontainer",
  components:{
    Playmusic
  },
  data() {
    return {
      isPlay:true,
      isShow:false,
      timer:0,
      timeid:0
    };
  },
  computed: {
    ...mapState({ playlist: "playlist" }),
    ...mapState({ playCurrentIndex: "playCurrentIndex" }),
    ...mapState({ intervalId:"intervalId"}),
    ...mapState(['currentTime'])
    // ...mapActions({UpdateTIme:"setcurrentTime"})
  },
  updated() {
   this.timeid = this.playlist[this.playCurrentIndex].id
    // clearInterval(this.intervalId)
    // this.UpdateTIme()

    this.$store.dispatch('Playislyric',{id:this.playlist[this.playCurrentIndex].id})
  },
   
 
  // mounted() {
  //   console.log(this.playlist[this.playCurrentIndex])
  // },
  methods: {
     //更新时间
    //  UpdateTIme() {
    //   this.$store.state.id  = setInterval(() => {
    //          this.$store.commit('setcurrentTime',this.$refs.audio.currentTime)
        
    //     },1000)
    // },
   
    clickPlay(){
      // paused控制是否播放  pause暂停播放
       if( this.$refs.audio.paused){
        this.$refs.audio.play()
        this.isPlay = false
     
        this.$store.commit('UpdateTIme',this.currentTime);
        // this.UpdateTIme()
       }else{
         this.$refs.audio.pause()
         this.isPlay = true
   
         this.$store.commit('ClearTime',this.currentTime)
        //  clearInterval(this.intervalId);
       }
     
    },
    isPL(){
       this.isPlay = true
    }
  },
  watch:{
    timeid :{
      handler(){
      this.$store.state.currentTime = 0
      
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Playcontainer {
  width: 7.5rem;
  height: 1.2rem;
  margin: 0 auto;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff;
  z-index: 999;
  .left {
    display: flex;
    align-items: center;
    .context{
         height: .7rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-content: space-around;
         padding:0 0.2rem;
         .title{
            font-size: 0.3rem;
         }
        .tips{
            font-size: 0.2rem;
            color: #ccc;
        }
    }
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }
  }
  .right{
      display: flex;
      align-items: center;
      .icon{
          width: 0.6rem;
          height: 0.6rem;
          margin: 0 0.1rem;
      }
  }
}
</style>
