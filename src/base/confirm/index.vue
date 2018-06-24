<template>
    <div class="confirmWrap" v-show="visible">
        <div class="confirm-con">
            <p class="confirm-text">{{content}}</p>
            <div class="btn-opt">
                <button class="btn confirm-btn" @click="cancelOper">{{cancelBtnText}}</button>
                <button class="btn cancel-btn" @click="confirmOper">{{okBtnText}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'confirm',
    data() {
        return {
            content: '确定要删除数据?',
            okBtnText: '确定',
            cancelBtnText: '取消',
            visible: false
        }
    },
    methods: {
       confirmOper() {},
       cancelOper() {}
    }
}
</script>
<style lang="less" scoped>
    .confirmWrap{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .6);
        .confirm-con{
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
            .confirm-text{
                padding: 5px 0 10px;
                color:#000;
            }
            .btn-opt{
                margin-top: 5px;
                .bnt{
                    display: inline-block;
                    width: 80px;
                    height: 40px;
                    border-radius: 4px;
                    color:#fff;
                    text-align: center;
                    line-height: 40px;
                    border:none;
                    &.confirm-bnt{
                        background: yellowgreen;
                    }
                    &.cancel-bnt{
                        background: #f1f1f1;
                    }
                }
            }
        }
    }
</style>

