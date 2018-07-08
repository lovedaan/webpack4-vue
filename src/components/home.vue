<template>
    <div class="home">
        <h1>主页</h1>
        <p>{{getCount}}</p>
        <ace-btn  @click.native="changeCount" text="改变值" />
        <ace-btn  @click.native="changeCountAsync" text="延迟两秒改变值" />
        <ace-btn  @click.native="showLoading" text="测试显示loading组件" />
        <ace-btn  @click.native="showConfirm" text="测试显示confirm组件" />
        <ace-btn  @click.native="showMessage" text="测试显示message组件" />
        <ace-btn  @click.native="showPicker" text="测试显示Picker组件" />
        <ace-btn  @click.native="showDatePicker" text="测试显示日期组件" />
        <picker ref="picker" @select="handleSelect(arguments)" :data="data" :selected-index="selectedIndex" />
        <date-picker ref="datePicker" @selected-date="handleSelectDate" />
    </div>
</template>
<script type="text/javascript">
     import {mapGetters, mapMutations, mapActions} from 'vuex';
     import api from 'api/index.js';
     import datePicker from 'base/date-picker/index.vue';
     let data = [
        {
        text: '剧毒',
        value: 1
        }, {
        text: '蚂蚁',
        value: 2
        },
        {
        text: '幽鬼',
        value: 3
        },
        {
        text: '主宰',
        value: 4
        },
        {
        text: '卡尔',
        value: 5
        },
        {
        text: '宙斯',
        value: 6
        },
        {
        text: '巫医',
        value: 7
        }, {
        text: '巫妖',
        value: 8
        },
        {
        text: '神谕者',
        value: 9
        },
        {
        text: '撼地神牛',
        value: 10
        },
        {
        text: '蓝胖子',
        value: 11
        },
        {
        text: '水晶室女',
        value: 12
        },
        {
        text: '莉娜',
        value: 13
        },
        {
        text: '斯拉克',
        value: 14
        },
        {
        text: '斯拉达',
        value: 15
        }
    ];
     export default{
        name: 'home',
        components: {
            datePicker
        },
        data() {
            return {
                data: [data],
                selectedIndex: [[0]]
            }
        },
        computed: {
            ...mapGetters(['getCount'])
        },
        mounted() {
            /* Promise.all([this.getData('top250'),this.getData('in_theaters'),this.getData('coming_soon')]).then(res => {
                console.log(res)
            }); */
        },
        methods: {
            getData(type) {
                return api.getMovie(type);
            },
            changeCount() {
                this.setcount(50);
            },
            changeCountAsync(){
                this.setcountasync(100);
            },
            showLoading() {
                this.$loading();
                setTimeout(() => {
                    this.$loading.close();
                }, 1000);
            },
            showConfirm() {
                this.$confirm();
            },
            showMessage() {
                this.$message();
            },
            showPicker() {
                let picker = this.$refs.picker;
                picker.show();
            },
            handleSelect(res) {
                console.log(res);
            },
            showDatePicker() {
                this.$refs.datePicker.show();
            },
            handleSelectDate(date) {
                console.log('选择的日期是：'+date);
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