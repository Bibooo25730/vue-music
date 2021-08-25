<template>
  <div class="loginnac">
    <div class="bg">
      <img :src="userUrl.backgroundUrl" alt="" />
      <div class="container">
        <div class="back">
          <svg class="icon" aria-hidden="true" @click="$router.push('/Home')">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </div>
        <div class="rigth">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
        </div>
      </div>
      <div class="headPhoto">
        <img :src="userUrl.avatarUrl" alt="" />
      </div>
      <div class="userName">
        <h3>{{ userUrl.nickname }} </h3>
        <h3 v-show="userUrl.userType == 0">会员过期😡</h3>
        <h3 v-show="userUrl.userType == 1">尊贵会员</h3>
      </div>
      <div class="attention">
        <span class="follows">关注{{ userUrl.newFollows }}</span><i></i><span>粉丝{{ userUrl.followeds }}</span>
      </div>
      <div class="viptype">
        <h5>{{userUrl.signature}}</h5>
      </div>
    </div>
    <div class="ContainerNav">
      <router-link :class="{active:$store.state.isShow}" to="/LoMe/UserMusic">音乐</router-link>
      <router-link :class="{active:!$store.state.isShow}" to="/LoMe/About">Stan</router-link>
    </div>
  
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "LoMe",
    data() {
      return {
        userItem: {},
        userUrl: {},
        Mvurl: ''
      };
    },
    async mounted() {
      this.userItem = this.$store.state.isUserPage
   
      this.userUrl = this.userItem.data.profile;
    
   
              

      // console.log(this.userItem.account.id)
      // let result = await this.$store.dispatch('Subcont', this.userItem.data.account.id)
   
     
    },
    computed: {
      logoState: function () {
        return this.$store.state.isUserPage;
      },
      // getTime() {
      //   function formatDateTime(inputTime) {
      //     var date = new Date(inputTime);
      //     var y = date.getFullYear();
      //     var m = date.getMonth() + 1;
      //     m = m < 10 ? ('0' + m) : m;
      //     var d = date.getDate();
      //     d = d < 10 ? ('0' + d) : d;
      //     var h = date.getHours();
      //     h = h < 10 ? ('0' + h) : h;
      //     var minute = date.getMinutes();
      //     var second = date.getSeconds();
      //     minute = minute < 10 ? ('0' + minute) : minute;
      //     second = second < 10 ? ('0' + second) : second;
      //     return y + '-' + m + '-' + d + ' ' + ' ' + h + ':' + minute + ':' + second;

      //   }
      //   return formatDateTime(this.userUrl.birthday)
      // }
    },

    watch: {
      // logoState(val) {
      //   this.userItem = val;
      //   // console.log(this.userItem);
      //   this.userUrl = this.userItem.data.profile;
      //   //    console.log(.backgroundUrl)
      // },
      isShow(val) {
        console.log(val)
      }
    },
  };
</script>


<style scoped lang="scss">
  .loginnac {
    width: 7.5rem;
    height: 100vh;
    padding: 0.4rem 0rem;

    .bg {
      img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        width: 7.5rem;
        height: 6rem;
        background-size: 20px 50px;
      }
    }

    .container {
      padding: 0.2rem 0.3rem;
      display: flex;
      justify-content: space-between;

      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #fff;
      }
    }

    .headPhoto {
      width: 7.5rem;
      height: 2rem;

      img {
        position: absolute;
        top: 1.8rem;
        left: 0.4rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
      }
    }

    .userName {
      display: flex;

      h3 {
        margin-top: 0.4rem;
        color: #fff;
        font-size: 0.3rem;
        text-indent: 0.4rem;
      }
    }

    .attention {
      margin-left: 0.4rem;

      span {
        display: inline-block;
        margin-top: 0.1rem;
        color: #fff;
        font-size: 0.2.2rem;
      }

      .follows::after {
        content: "";
        width: 1px;
        height: 1px;
        margin: 0 0.2rem;
        border-left: 1px solid #ccc;
      }

      i {
        //   color: #fff;
        //   height: 1px;
        //   width: 1px;
        //   border-left: 0.2px solid #ccc;
        //   margin: 0 0.1rem;
      }
    }

    .viptype {
      margin: .2rem 0.4rem;

      h5 {
        color: #ddd;
      }
    }
  }

  .ContainerNav {
    width: 7.5rem;
    background-color: #fff;
    height: 1.0rem;
    border-radius: .4rem .4rem 0 0;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .active {
      display: inline-block;
      height: 1rem;
      font-size: .3rem;
      line-height: 1rem;
      color: #CE1935;
      border-bottom: 1px solid #CE1935;
    }
 

  }

</style>
