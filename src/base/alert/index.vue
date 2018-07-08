<template>
    <transition name="fade">
        <div class="alertWrap" v-show="visible">
            <div class="alert-con">
                <p class="alert-text">{{content}}</p>
                <button class="alert-bnt" @click="confirmOper">{{btnText}}</button>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'alert',
    data() {
        return {
            content: '你要干嘛',
            btnText: '确定',
            visible: false
        }
    },
    methods: {
       confirmOper() {} 
    }
}
</script>
<style lang="less" scoped>
    .alertWrap{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .6);
        .alert-con{
            position: absolute;
            left: 50%;
            top:50%;
            width: 200px;
            height: 100px;
            transform: translate(-50%,-50%);
            background: #fff;
            border-radius: 10px;
            text-align: center;
            padding-top: 10px;
            .alert-text{
                padding: 5px 0 10px;
                color:#000;
            }
            .alert-bnt{
                display: inline-block;
                width: 80px;
                height: 40px;
                border-radius: 4px;
                background: yellowgreen;
                color:#fff;
                text-align: center;
                line-height: 40px;
                border:none;
                margin-top: 5px;
            }
        }
    }
    .fade-enter-active,.fade-leave-active{
        transition:all 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>

