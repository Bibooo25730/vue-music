<template>
  <div class="play">
    <div class="playlist">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <div class="title">
          <h2>播放全部</h2>
        </div>
        <div class="num">(共{{ play.tracks.length }}首)</div>
      </div>
      <div class="right">
        <div class="btn">
          <span>+ 收藏({{ play.subscribedCount }})</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item, i) in play.tracks" :key="item.id">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="tag" v-for="(tag, i) in play.tags" :key="i">
              {{ tag }}
            </div>
            <div class="al">{{ item.al.name }}</div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true" @click="playMusic(i)" >
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changyongicon-"></use>
          </svg>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// import {mapMutations} from "vuex"
export default {
  name: "Playlist",
  props: ["playList"],
  mounted() {
    this.play = this.playList.data.playlist;
    this.$store.commit('setPlatlist', this.play.tracks)
  
  },
  data() {
    return {
    
      play: {
        tracks: {},
      },
    };
  },
  methods: {
   playMusic(index){
     this.$store.commit('setplayCurrentIndex',index)
    }
  },
};
</script>

<style lang="scss" scoped>
.play {
  width: 7.5rem;
  background-color: #fff;
}
.playlist {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin-top: 1.3rem;
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
</style>
