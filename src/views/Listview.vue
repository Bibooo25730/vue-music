<template>
    <div class="listView">
        <ListviewTop v-if="flag" :playList="playst"></ListviewTop>
        <playlist v-if="flag" :playList="playst"></playlist>
    </div>
</template>

<script>
    import playlist from "../views/Playlist"
    import { getPlaylist } from '@/api/index'
    import ListviewTop from '../views/ListviewTop'
    export default {
        name: 'listview',
        data() {
            return {
                playst: {},
                flag: false
            };
        },
        components: {
            ListviewTop,
            playlist
        },

        async mounted() {
           
            let play = this.$route.query
            let jsoner = await getPlaylist(play.id)
            // console.log(jsoner)
            if (jsoner.data.code == 400) {
                this.playst = this.$route.query.playlist
                this.flag = true
            } else {
                this.playst = jsoner
                this.flag = true
            }

        },

        methods: {

        },
    };
</script>

<style lang="scss" scoped>

</style>
