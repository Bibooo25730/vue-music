<template>
    <div class="nav-center">
        <ul>
         <li>
         <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-xiangsituijian"></use>
         </svg>
         <span>每日推荐</span>
       </li>
         <li>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fengmiguan"></use>
            </svg>  
            <span>私人fm</span>
         </li>
            <li>
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-gedan"></use>
           </svg>
           <span>歌单</span>
         </li>
            <li>
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-paihangbang"></use>
           </svg>
           <span>排行榜</span>
         </li>
        </ul>
   </div>
</template>

<script>
export default {
    name: 'conlist',
   
    data() {
        return {
           
        };
    },
 
};

</script>

<style lang="scss" scoped>
.nav-center{
   width: 7.1rem;
   margin: .2rem auto;
   ul{
    display: flex;
    justify-content: space-around;
    justify-items: center;
     li{
       display: flex;
       flex-direction: column;
          span{
            text-align: center;
          }
     }
   }
   .icon{
     width: 1rem;
     height: 1rem;
   }
}
</style>