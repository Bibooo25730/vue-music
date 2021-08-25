<template>
    <div class="sonelist">
        <div class="greatplaylist">
            <h1>发现好歌单</h1>
            <button>查看更多</button>
        </div>
        <div class="swiper-container">
            <swiper :options="swiperOption">

                <swiper-slide v-for="music in recommendList" :key="music.id">
                    <router-link :to="{path:'/listview',query:{id:music.id}}">
                        <img :src="music.picUrl" :alt="music.name" />
                        <span>{{ music.name }}</span>
                        <div class="title">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-erji"></use>
                            </svg>
                            <small>{{ music.playCount | formatNumber}}</small>
                        </div>
                    </router-link>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>

            </swiper>
        </div>

    </div>

</template>


<script>
    import { getMusiclist } from "@/api/index";
    import "swiper/css/swiper.css";
    import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
    export default {
        name: "Sonelist",
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            btnClick() {
                const vm = this;
                vm.$router.push({ name: "listview" })
            }
        },
        directives: {
            swiper: directive,
        },
        data() {
            return {
                recommendList: {},
                swiperOption: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                    freeMode: true,
                    navigation: {
                        nextEl: ".next",
                        prevEl: ".prev",
                    },
                },
            };
        },
        filters: {
            formatNumber: function (value) {
                if (value === 0) {
                    return value + '';
                } else if (value > 1 && value < 10000) {
                    return value + '';
                } else {
                    return (value / 10000).toFixed(2) + '万'
                }

            }
        },
        async mounted() {
            let musicList = await getMusiclist(10);
        
            this.recommendList = musicList.data.result;
         
           
            
        },
    }
</script>



<style scoped lang="scss">
    .icon {
        width: 0.7rem;
        height: 0.7rem;

        position: absolute;
        top: 0;
    }

    .home {
        width: 7.5rem;
    }

    .greatplaylist {
        width: 6.7rem;
        margin: 0.4rem auto;
        display: flex;
        justify-content: space-between;

        button {
            width: 1.5rem;
            height: 0.46rem;
            background-color: #fff;
            border-radius: 10px 10px 10px 10px;
            border: 1px solid #ccc;
        }
    }

    .swiper-container {
        width: 7.1rem;
        margin: -0.2rem auto;
        position: relative;
        height: 3rem;
        z-index: 1;
        img {
            width: 100%;
            height: 2rem;
            border-radius: 0.1rem;
        }

        span {
            display: block;
            height: 0.72rem;
            overflow: hidden;
            font-size: 0.24rem;
            line-height: 0.4rem;
        }

        small {
            position: absolute;
            top: .2rem;
            right: 0;
            color: #ccc;
        }
    }

</style>
