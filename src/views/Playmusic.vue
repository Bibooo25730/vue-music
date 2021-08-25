<template>
  <div class="Playmusic">
    <div class="bg" :style="{backgroundImage:`url(${playmusic.al.picUrl})`}"></div>
    <div class="playTop">
      <div class="left">
        <div class="back" @click="$emit('back')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </div>
        <div class="center">
          <div class="title">
            <marquee class="author1" behavior="slide" direction="left">{{
              playmusic.name
            }}</marquee>
            <marquee class="author" behavior="slide" direction="left"
              >{{ playmusic.al.name }}></marquee
            >
          </div>
        </div>
      </div>
      <div class="rigth">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div v-show="!islyric"  class="playContent">
      <img class="needle" :class="{active:!isPlay}"  src="../assets/img/needle-ab.png" alt="" />
      <img class="disc" src="../assets/img/disc-ip6.png" alt="" />
      <img class="clireImg" :src="playmusic.al.picUrl" alt="" />
    </div>
    <!-- 控制时间加active -->
    <div v-show="islyric" class="lyric"  ref="playLyric">
          <p  :class="{active:(currentTime*1000>=item.pre&&currentTime*1000<item.time)}"  
             v-for="(item,i) in $store.getters.slyric" 
             :key="i" >{{item.lyric}}</p>
    </div>
    <div class="propgress"></div> 
    <div class="playfooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="shou(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <div class="play">
        <svg  v-if="isPlay"  @click="clickPlay"  class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg  v-else   @click="clickPlay"    class="icon" aria-hidden="true">
          <use   xlink:href="#icon-weibiaoti--"></use>
        </svg>
      </div>
      <svg class="icon" aria-hidden="true" @click="shou(1)">
        <use xlink:href="#icon-49xiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Playmusic",
  props:['playmusic','isPlay','clickPlay'],
  data() {
    return {
            islyric:true,
            plislyric:{},
            timer:0
    
    };
  },
  methods:{
    //切换上下首
    shou(num){
      let count = this.playCurrentIndex+num
      if(count<0){
          count = this.playlist.length-1
          this.$emit('clopop');
          this.$store.commit('ClearTime',this.currentTime)
          // this.isPlay = true
      }else if(count==this.playlist.length){
         count =0
         this.$emit('clopop');
         this.$store.commit('ClearTime',this.currentTime)
      }
        this.$store.commit('setplayCurrentIndex',count)
        this.$emit('clopop');
        this.$store.commit('ClearTime',this.currentTime)
    }
  },
  mounted() {
   
  
    // this.$store.mutations('UpdateTIme',this.timer)
  },
  computed:{
      ...mapState(['playislyric','currentTime','playCurrentIndex','playlist'])
  },
  watch:{ 
    currentTime:function(){
    
    
      let p  =   document.querySelector('p.active')
    
      // let h = this.$refs.playLyric.offsetHeight
      this.$refs.playLyric.scrollTop= p.offsetTop
      
    },
    isPlay(){
      console.log(this.isPlay)
    }
  },
   
 
 
};
</script>

<style lang="scss" scoped>

.Playmusic {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
   background-color: #fff;
   
  .bg {
     position: absolute;
        left:0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(60px);

  }
  .playTop {
     width: 7.5rem;
    padding: 0.4rem;
    height: 1.2rem;
     position: absolute;
        left: 0;
        top: 0;
    display: flex;
    justify-content: space-between;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .left {
      display: flex;
      .center {
        margin-left: 0.4rem;
        .title {
          display: flex;
          flex-direction: column;
          margin-top: -0.1rem;
          .author1 {
            font-size: 0.3rem;
            color: #fff;
          }
          .author {
            color: burlywood;
          }
        }
      }
    }
  }
  .playContent {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: 1.5rem;
    .needle.active {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform: rotate(10deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: -1.7rem 1rem;
      transform: rotate(-20deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc {
      position: absolute;
    }
    .clireImg {
      width: 4.7rem;
      height: 4.7rem;
      border-radius: 4.7rem;
      position: absolute;
      top: 2.9rem;
      left: 19.2%;
    }
  }
}
.playfooter {
  width: 7.5rem;
  height: 1.5rem;
  position: absolute;
  left: 0;
  bottom: 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 0.5rem;
    height: 0.5rem;
    fill: #fff;
  }
  .play .icon {
    width: 0.8rem;
    height: 0.8rem;
  }
}
.lyric{
    width: 7.5rem;
    height: 8rem;
    position: absolute;
    left: 0;
    top: 15%;
    padding: 0.2rem 0;
    font-size: .4rem;
    color: #fff;
    overflow:scroll;
    text-align: center;
    .active{
       color: brown;
      
    }
    p{
    
      margin: 0.1rem;
    
    }
   
}

</style>