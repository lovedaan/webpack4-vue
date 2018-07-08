<template>
     <div id="ace-btnWrap" :class="{plain : plain}">
          <button :class="['ace-btn', 'ace-btn-'+ type]" @click="selectBtn">{{text}}</button>
     </div>
</template>
<script>
export default {
    name: 'btn',
    props: {
        text: {
            type: String,
            default: '默认按钮'
        },
        type: {
            type: String,
            default: 'primary'
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selectBtn() {
            this.$emit('select-item');
        }
    }
}
</script>
<style lang="less">
    #ace-btnWrap{
        padding: 10px;
        .ace-btn{
            display: inline-block;
            width: 100%;
            height: 45px;
            line-height:45px;
            border-radius:5px;
            border: none;
            text-align: center;
            background:#26a2ff;
            color:#fff;
            font-size:15px;
            outline:none;
            &.ace-btn-default{
                background:#f6f8fa;
                box-shadow: 0 0 1px #b8bbbf;
                color: #656b79;
            }
            &.ace-btn-danger{
                background-color: #ef4f4f;
            }
        }
        &.plain{
            .ace-btn{
                &.ace-btn-default{
                    border: 1px solid #5a5a5a;
                    background-color: transparent;
                    box-shadow: none;
                    color: #5a5a5a;
                }
                &.ace-btn-danger{
                    border: 1px solid #ef4f4f;
                    background-color: transparent;
                    color: #ef4f4f;
                }
                &.ace-btn-primary{
                    border: 1px solid #26a2ff;
                    background-color: transparent;
                    color: #26a2ff;
                }
            }
        }
    }
</style>

