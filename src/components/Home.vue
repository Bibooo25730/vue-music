<template>
  <div class="home">
    <Topnav></Topnav>
    <topswiper></topswiper>
    <Iconlist></Iconlist>
    <Sonelist></Sonelist>
  </div>
</template>

<script>
import Sonelist from './Sonelist.vue'
import Iconlist from "./Iconlist.vue";
import Topswiper from "./topSwiper.vue";
import Topnav from "./Topnav";
export default {
  name: "Home",
  components: {
    Topnav,
    Topswiper,
    Iconlist,
    Sonelist
  },
};
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
}
</style>