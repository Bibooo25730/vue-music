<template>
  <div class="usermusic">
    <div v-for="(item, i) in playslit" :key="i" class="container" @click="play(item.id)">
      <img :src="item.coverImgUrl" alt="" />
      <div class="right">
        <h2>{{ item.name }}</h2>
        <span>{{ item.trackCount }}首,播放{{ item.playCount }}次</span>
        <!-- <p></p> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "UserMusic",
    data() {
      return {
        userItem: {},
        playslit: {},
        playlist: {},
        userInfo:{}
      };
    },
    methods: {
      async play(id) {
        // this.userInfo =
        // JSON.parse(window.localStorage.getItem("user"));
        // let result  = await  this.$store.dispatch("Login",{phone:this.userInfo.phone,password:this.userInfo.password});

        let sendResult = await this.$store.dispatch('MusicPlayitem', id)
     
        this.playlist = sendResult
        
        this.$router.push({
          name: 'listview', query: {
            playlist: this.playlist
          }
        })

      }
    },
    // props(route){
    //  return{
    //    list:router.query.playlist
    //  }
    // },
    async mounted() {
   
      this.userItem = this.$store.state.isUserPage;
      let sule = await this.$store.dispatch(
        "UserPl",
        this.userItem.data.account.id
      );
      this.playslit = sule.data.playlist;
    


    },
  };
</script>

<style lang="scss" scoped>
  .usermusic {
    .container {
      margin-left: .4rem;
      display: flex;

      img {
        width: 1rem;
        height: 1rem;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }

</style>
