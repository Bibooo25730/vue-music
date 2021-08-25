<template>
  <div class="listviewTop">
    <img class="bg" id="fixed" :src="playlist.coverImgUrl" />
    <div class="listviewNav">
      <div class="back"  @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao1"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <img class="bgcenter" :src="playlist.coverImgUrl" />
        <div class="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji"></use>
          </svg>
          <small>{{ playlist.playCount | formatNumber }}</small>
        </div>
      </div>
      <div class="contentright">
        <div class="author">
          <h2>{{ playlist.name }}</h2>
          <img :src="playlist.creator.avatarUrl" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          <p class="title">{{ playlist.description }}</p>
        </div>
      </div>
    </div>
    <!-- 下面图标列表 下载 多选 -->
    <div class="iconlist">
      <div class="iclist">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dilanxianxingiconyihuifu_huabanfuben"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iclist">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duomeitiicon-"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iclist">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iclist">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListviewTop",
  props: ["playList"],
  computed: {},
  data() {
    return {
      playlist: {
        creator: {
          avatarUrl: {},
          nickname: {},
        },
      },
    };
  },

  mounted() {
  
    let play = this.playList.data;
    this.playlist = play.playlist;
   
  },
  methods: {},
  filters: {
    formatNumber: function (value) {
      if (value === 0) {
        return value + "";
      } else if (value > 1 && value < 10000) {
        return value + "";
      } else {
        return (value / 10000).toFixed(2) + "万";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.listviewTop {
  width: 7.5rem;
  margin-top: 0.3rem;
  padding: 0 0.4rem;
  overflow: hidden;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 7.5rem;
    height: 6.4rem;
    z-index: -1;
    filter: blur(15px);
    transform: scale(1.3);
  }
  .listviewNav {
    display: flex;
    height: 0.8rem;
    color: #fff;
    align-items: center;
    font-size: 0.35rem;
    justify-content: space-between;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .search {
      margin-right: 0.4rem;
    }
    .back {
      display: flex;
      align-items: center;

      .title {
        margin-left: 0.4rem;
        font-size: 0.3rem;
      }
    }
  }
}
.content {
  display: flex;
  margin-top: 0.6rem;
  .contentleft {
    position: relative;
    .bgcenter {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.2rem;
    }
    .title {
      position: absolute;
      right: 0.2rem;
      display: flex;
      align-items: center;
      top: 0.2rem;
      color: #ccc;
      .icon{
           width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
      }
    }
  }
  .contentright {
    width: 3.5rem;
    margin-left: 00.5rem;
    .author {
      margin: 0.18rem 0;
      h2 {
        display: block;
        margin: 0.1rem 0;
        color: #fff;
      }
      span {
        color: #ccc;
        margin: 0 0.2rem;
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.1rem 0;
        border-radius: 0.3rem;
      }
    }
    .description {
      p {
        font-size: 0.24rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        //设置多少行
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.iconlist {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  .iclist {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ddd;
    .icon {
      width: 0.8rem;
      height: 0.8rem;
      fill: #fff;
    }
  }
}
</style>