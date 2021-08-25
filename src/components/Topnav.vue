<template>
   
        <div class="topNav">
         <div class="topLeft">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changyongicon-"></use>
        </svg>
            </div>
            <div class="topCenter">
                <a href="#" @click="$router.push('/loMin')">我的</a>
                <a class="active" href="#">发现</a>
                <a href="#">云村</a>
                <a href="#">视频</a>
            </div>
            <div class="topRight">
            <svg class="icon" aria-hidden="true" @click="$router.push('/Searchpage')">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
            </div>
        </div>
  
</template>
<script>

export default {
    name: 'Topnav',
    components: {
   
  },
  
};
</script>

<style lang="scss" scoped>
.active{
    font-weight:900;
    color: #000;
}
.topNav{
    margin: 0.2rem auto;
    
    width: 7.5rem;
    height: 0.8rem;
    display: flex;
    padding: 0.4rem 0.2rem 0.2rem 0.2rem;
    justify-content: space-between;
    .icon{
        width: 0.45rem;
        height: 0.4rem;
    }
    span{
        width: 1rem;
        height:1rem;
        color:#333333;
    }
    .topCenter{
        width: 5rem;
        display: flex;
        justify-content:space-around;
      a{
          padding-left: 5px;
          font-size: .32rem;
      }
    }
}
</style>