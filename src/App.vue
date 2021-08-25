<template>
  <div>
   <router-view></router-view>
   <PlayContainer ></PlayContainer>
  </div>
</template>
<script>

import PlayContainer from "./views/PlayContainer"
export default {
  name: 'App',
  components:{
    PlayContainer
  }
}
</script>

<style>

</style>
