<template>
  <div class="Searcgtop">
    <div class="container">
      <div class="back">
        <svg class="icon" aria-hidden="true" @click="$router.push('/Home')">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </div>
      <div class="searchContainer">
        <input
          @keydown.enter="play()"
          v-model="value"
          type="text"
          name=""
          id="blur"
          :placeholder="placeholder"
        />
      </div>
    </div>
    <div class="bg">
      <img src="../assets/img/cropped-1600-900-987420.png" alt="" />
    </div>
     <div class="play">
    <div class="playlist">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <div class="title">
          <h2>播放全部</h2>
        </div>
        <div class="num">(共{{ searchSongs.length }}首)</div>
      </div>
      <div class="right">
        <!-- <div class="btn">
          <span>+ 收藏({{ play.subscribedCount }})</span>
        </div> -->
      </div>
    </div>
    <div class="list" v-show="!isSHow">
      <div class="playItem" v-for="(item, i) in searchSongs" :key="item.id">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="tag" v-for="(tag, i) in play.tags" :key="i">
              {{ tag }}
            </div>
            <div class="al">{{item.artists[0].name}}--</div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true" @click="playMudsic(item,i)" >
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changyongicon-"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
    <div v-show="isSHow" class="containerHistty">
      <div class="title">历史</div>
      <div class="histry" v-for="(item, i) in keywordlist" :key="i">
        <button @click="gomusic(item)">{{item}}</button>
      </div>
    </div>
   
    <div class="box-container">
      <div class="searchop">
        <div class="title">
          <h3>搜索 '{{ value }}'</h3>
        </div>
        <div class="back">
          <i @click="clear" class="close">X</i>
        </div>
      </div>

      <!-- <ul>
        <li
          @mouseleave="mouseLeave(i)"
          @mouseover="mouseOver(i)"
           @click="playMusic(item.id,i)"
          v-for="(item, i) in songs"
          :ref="`list${i}`"
          :key="i"
        >
          <svg
            class="icon"
            aria-hidden="true"
            @click="$router.push('/Searchpage')"
          >
            <use xlink:href="#icon-sousuo1"></use>
          </svg>

          <h2  >{{ value }} {{ item.name }}</h2>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>

// import { getsuggest } from "../api/index";
import {getSearch} from "../api/index"
export default {
  name: "SearcgTop",
  data() {
    return {
      value: "",
      keywordlist: [],
      isSHow:true,
      real: false,
      active: "",
      indexId:{
        id:85571
      },
      placeholder:"许冠杰",
     searchSongs:{}
    };
  },
  beforeMount() {
    this.keywordlist = localStorage.keywordlist
      ? JSON.parse(localStorage.keywordlist)
      : [];
  },
  // watch: {
  //   async value(newVal) {
  //     if (newVal.length == 0) {
  //       // this.songs = {};
  //     } else {
  //       // let result = await getsuggest(this.value);
  //       // this.songs = result.data.result.songs;
     
  //     //  this.playst = await getPlaylist(this.indexId.id)
  //       // console.log('ddd',this.play)    
  //       // console.log(result);
  //     }
  //   },
  // },

async  updated() {
    
   
  },
 async  mounted() {
    document.getElementById("blur").blur();
   
  },
  methods: {
    playMudsic(item){
        // this.$store.commit('setplayCurrentIndex',i)
         item.al = item.album;
         item.al.picUrl = item.album.artist.img1v1Url
       
        this.$store.commit('pushPlatlist',item)
        this.$store.commit('setplayCurrentIndex',this.$store.state.playlist.length-1)
         
    },
  async  play() {
      this.keywordlist.push(this.value);
       this.keywordList = Array.from(new Set(this.keywordList)) 
      localStorage.keywordlist = JSON.stringify(this.keywordlist);
     
        if(this.keywordlist.length>10){
                this.keywordlist = this.keywordlist.slice(this.keywordlist.length-10,this.keywordlist.length)
            }
    let reseu = await getSearch(this.value)
    this.searchSongs = reseu.data.result.songs
     this.value = ""
     this.isSHow = false
   
     
      // (this.songs = {});
    },
    clear(){
    var x = confirm("你是否要清空历史记录");
     if (x == true) {
        localStorage.clear()
        this.keywordlist = ''
      } else {
         alert("Bye");
       }
      //      
       
        
    },
    mouseOver(i) {
      this.$refs[`list${i}`][0].style.background = "#ddd";
    },
    mouseLeave(i) {
      this.$refs[`list${i}`][0].style.background = "#fff";
    },
    // playMusic(id,i){
    //   this.indexId.id = id
    //   console.log(i)
       
    // },
   gomusic(item){
       this.value = item;
       this.play()
   }
  },
};
</script>

<style lang="scss" scoped>
.Searcgtop {
  width: 7.5rem;
  height: 1.5rem;
  margin: 0.2rem auto;
 
  .containerHistty {
    width: 6.5rem;
    overflow: hidden;
    height: 1rem;
    display: flex;
    margin-top: 0.4rem;
    font-size: 0.4rem;
    .title {
      position: absolute;
    }
    button {
      width: 1rem;
      font-size: 0.3rem;
      border-radius: 0.2rem;
      margin-left: 0.9rem;
    }
  }

  .bg {
    img {
      border-radius: 0.4rem;
    }
  }

  .container {
    display: flex;
    align-items: center;

    .searchContainer {
      width: 80%;

      input {
        margin-left: 0.4rem;
      }

      input {
        display: inline-block;
        width: 100%;
        font-size: 0.4rem;
        border-bottom: 1px solid black;
      }
    }
  }

  .back {
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .play {

  width: 7.5rem;
  margin: 0 auto;
  background-color: #fff;
}
.playlist {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    margin: .2rem 0;
    .title {
      margin-left: 0.4rem;
      color: black;
      font-size: 0.3rem;
    }
    .num {
      color: #ccc;
      font-size: 0.3rem;
    }
  }
  .right {
     margin: .2rem 0;
    .btn {
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background-color: #ff4c3c;
      color: #fff;
      padding: 0.2rem;
      border-radius: 1rem;
      text-align: center;
    }
  }
  .icon {
    width: 0.6rem;
    height: 0.6rem;
    fill: #fff;
  }
}
.list {
  padding: 0 0.5rem;
  margin-top: 0.1rem;
  .playItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .index {
        font-size: 0.3rem;
        color: #ccc;
      }
      .content {
        margin: 0.2rem 0.2rem;
        .title {
          font-size: 0.3rem;
          color: #000;
        }
        .tag {
          display: inline-block;
          color: orange;
          border: 1px solid orangered;
          border-radius: 0.1rem;
        }
        .al {
          display: inline-block;
          font-size: 0.2rem;
          color: #666;
        }
      }
    }
    .right {
      display: flex;
      .icon {
        margin: 0 0.2rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
}
}

.box-container {
  background-color: #fff;
  ul li {
    display: flex;
    align-items: center;
    height: 0.6rem;
    line-height: 0.6rem;
    border: 1px solid #ccc;
    margin-top: 0.1rem;

    .icon {
      width: 0.4rem;
      height: 0.4rem;
      fill: black;
    }
  }
}
.searchop {

  display: flex;
  justify-content: space-between;

  .title {
    font-size: 0.4rem;
    color: #ccc;
  }
  .close {
    font-size: 0.4rem;
    color: #909399;
  }
}
</style>
