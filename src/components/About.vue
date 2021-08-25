<template>
    <div class="about">
        <div class="video">
            <video :src="Mvurl" controls="controls"></video>
          </div>      
    </div>
</template>
<script>
    export default {
        name: "About",
        data() {
            return {
                Mvurl:''
            }
        },
             async mounted() {
             let result = await this.$store.dispatch('StanMv')
             this.Mvurl = result.data.data.url
         },
    }
</script>


<style lang="scss" scoped>
      .video{
    width: 7.5rem;
    height: auto;
    margin-top: .4rem;
    video{
      width: 7.5rem;
    }
  }
</style>