<template>
    <div id="app">
        <navView />
        <router-view />
    </div>
</template>
<script type="text/javascript">
     import navView from 'base/nav/nav.vue';
     export default{
        name: 'app',
        components: {
            navView
        }
     }
</script>
<style type="text/css" lang="less">
    #app{
        padding-top: 50px;
    }
</style>