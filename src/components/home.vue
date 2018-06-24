<template>
    <div class="home">
        <h1>主页</h1>
        <p>{{getCount}}</p>
        <button type="button" @click="changeCount">改变值</button>
        <button type="button" @click="changeCountAsync">延迟两秒改变值</button>
    </div>
</template>
<script type="text/javascript">
     import {mapGetters, mapMutations, mapActions} from 'vuex';
     import api from 'api/index.js';
     export default{
        name: 'home',
        computed: {
            ...mapGetters(['getCount'])
        },
        mounted() {
            /* api.getMovie().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            }) */
            //Confirm();
            //this.$confirm();
        },
        methods: {
            changeCount() {
                this.setcount(50);
            },
            changeCountAsync(){
                this.setcountasync(100);
            },
            ...mapMutations({
                setcount:'SETCOUNT'
            }),
            ...mapActions({
                setcountasync: 'SETCOUNTASYNC'
            })
        }
     }
</script>
<style type="text/css" media="screen" lang="less">
    .home{
        width: 100%;
        height: 100%;
    }
</style>