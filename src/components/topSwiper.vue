<template>
    <swiper  id="parent" class="swiper-container"  ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in imgUrl" :key="item.bannerId">
            <img :src="item.pic" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";
    import {getBanner} from '@/api/index'
    export default {
        name: 'Topswiper',
        components: { Swiper, SwiperSlide, },
        directives: {
            swiper: directive,
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // Some Swiper option/callback...
                },
                imgUrl:{}
            }
        },
    async mounted() {
         let res = await  getBanner(1)
         this.imgUrl = res.banners
        },
    }
</script>

<style lang="scss" scoped>
.swiper-container{
    width: 7.1rem;
    height: 3rem;
    border-radius: 0.1rem;
    z-index: 1;
    img{
       
        width: 100%;
        
    }
}
.swiper-pagination{
    bottom: 0.4rem
}
#parent ::v-deep .swiper-pagination-bullet-active {
  background-color: red;
}
</style>
