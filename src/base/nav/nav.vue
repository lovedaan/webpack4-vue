<template>
    <div class="nav-wrap">
        <ul class="nav-list">
            <router-link tag="li" :to="{name:'home'}">首页</router-link>
            <router-link tag="li" :to="{name:'search'}">搜索</router-link>
            <router-link tag="li" :to="{name:'profile'}">个人</router-link>
        </ul>
    </div>
</template>
<script>
export default {
   name: 'nav-view' 
}
</script>
<style lang="less">
    .nav-wrap{
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        top: 0;
        .nav-list{
            width: 100%;
            display: flex;
            border-bottom: 1px solid #000;
            li{
                flex:1;
                line-height: 50px;
                text-align: center;
                &.active{
                    background: yellowgreen;
                    color:#fff;
                }
                a{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>

