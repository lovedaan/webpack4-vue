<template>
    <div class="date">
        <transition name="slide">
            <div class="date-picker" v-show="hideDate">
                <header class="acePicterHeader"><a class="left" id="closebtn" href="javascript:;" @click="closePicker">取消</a><h1 class="calTitle"></h1><a @click="confirmPicker" class="right" id="okbtn" href="javascript:;">确定</a></header>
                <div class="cal_main">
                    <div class="date_header"><div class="cal_year" @click="showPicker('year','请选择年份')">{{year}}</div><div class="start_title">开始日期</div><div class="cal_month" @click="showPicker('month','请选择月份')">{{month}}月</div></div>
                    <table>
                        <thead>
                            <tr>
                                <th>日</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(month, index) in monthArr" :key="index">
                                <td v-for="(item, idx) in month" :key="idx" :class="{disabled : item.disabled, active : !item.disabled && nowDate == item.d}" @click="selectItem(item)">{{item.d}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </transition>
        <picker ref="picker" @select="handleSelect(arguments)" :data="data" :selected-index="selectedIndex" :title="pickerTitle" />
    </div>
</template>
<script>
/*
日历三要素：
    1. 本月1号星期几
    2. 这个月共有几天
    3. 上个月有几天
区一不可

*/
//console.log(new Date(2018, 3, 24)); // 2018.04.24

// 得到某月某日是星期几，比如2018年4月24日：
// var d = new Date(2018, 3, 24);
// console.log(d.getDay()); // 2018.04.24 是星期2

//得到某月的第一天是星期几，比如2018年4月的第一天是
//var d = new Date(2018, 3, 1);
//console.log(d.getDay()); // 0 即是星期天

//得到某月共有几天，比如：2018年4月
// var d = new Date(new Date(2018, 3 + 1, 1) - 1);
// console.log(d.getDate()); // 30

//得到某月的上一个月共有几天，比如：2018年4月的上一个月
// var d = new Date(new Date(2018, 2 + 1, 1) - 1);
// console.log(d.getDate()); // 31
export default {
    name: 'date',
    props: {
        date: {
            type: String,
            default: '2018-07-08'
        }
    },
    data() {
        return {
            monthArr: [],
            nowDate: (new Date()).getDate(),
            hideDate: false,
            type: 'year',
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            pickerTitle: '请选择年份'
        }
    },
    computed: {
        data() {
            let ret = [];
            if(this.type === 'year') {
                for(let i = 2010; i <= 2030; i++) {
                    ret.push({
                        text: i,
                        value: i
                    });
                }
            }else{
                for(let i = 1; i <= 12; i++) {
                    ret.push({
                        text: i,
                        value: i
                    });
                }
            }
            return [ret];
        },
        selectedIndex() {
            let num;
            if(this.type === 'year'){
                num = 0;
                for(let i = 2010; i <= 2030; i++) {
                    num++;
                    if(i == this.year){
                        break;
                    }
                }
                num = num - 1;
            }else{
                num = 0;
                for(let i = 1; i <= 12; i++) {
                    num++;
                    if(i == this.month){
                        break;
                    }
                }
                num = num -1;
            }
            return [[num]];
        }
    },
    mounted() {
        this.initDate(this.year, this.month);
        //this.selectedIndexArray = this.selectedIndexs();
    },
    methods: {
        show() {
            this.hideDate = true;
        },
        hide() {
            this.hideDate = false;
        },
        showPicker(text,title) {
            this.pickerTitle = title;
            this.type = text;
            let picker = this.$refs.picker;
            picker.show();
        },
        handleSelect(res) {
            if(this.type === 'year'){
                this.year = res[2][0];
            }else{
                this.month = res[2][0];
            }
            console.log(res[2]);
        },
        initDate(year, month) {
            this.monthArr = [];
            //得到本月的第一天是星期几
            var benyue1haoxingqiji = (new Date(year, month - 1)).getDay();
            //得到本月共几天
            var benyuegongjitian = (new Date(new Date(year, month, 1) - 1)).getDate();
            //得到本月的上一个月共几天
            var benyueshangyuegongjitian = (new Date(new Date(year, month - 1, 1) - 1)).getDate();
            var dangqianjihao = (new Date()).getDate();
            var arr = [];
            //本月星期几，就有上个月的尾巴有几天
            //这里有个特殊情况，0即是星期天，那这一行要补上个月7天
            var m = benyue1haoxingqiji === 0 ? 7 : benyue1haoxingqiji;
            while (m--) {
                arr.unshift({
                    d: benyueshangyuegongjitian--,
                    disabled: true,
                    now: false
                });
            }
            //放本月的日子
            var count = 1;
            while (benyuegongjitian--) {
                if (count === dangqianjihao) {
                    arr.push({
                        d: count++,
                        disabled: false,
                        now: false
                    });
                } else {
                    arr.push({
                        d: count++,
                        disabled: false,
                        now: false
                    });
                }

            }
            //放下一个月的天数，要么五行要么六行即是35或42项
            var zongxiangshu = 42;
            count = 1;
            while (arr.length != zongxiangshu) {
                arr.push({
                    d: count++,
                    disabled: true,
                    now: false
                });
            }
            //console.log(arr)
            //得到所有数据，即拆成7项为一个小数组
            var result = [];
            var num = zongxiangshu / 7;
            for (var i = 0; i < num; i++) {
                result.push(arr.slice(i * 7, (i + 1) * 7));
            }
            this.monthArr = result;
        },
        selectItem(item) {
            if (!item.disabled) {
                this.nowDate = item.d;
            }
        },
        closePicker() {
            this.hide();
        },
        confirmPicker() {
            let y = this.year;
            let m = this.month + '';
            m = m.padStart(2,'0');
            let d = this.nowDate + '';
            d = d.padStart(2,'0');
            this.$emit('selected-date',`${y}-${m}-${d}`);
            this.hide();
        }
    },
    watch: {
        month(val) {

            if (this.year == (new Date()).getFullYear() && val == (new Date()).getMonth() + 1) {
                this.nowDate = (new Date()).getDate();
            } else {
                this.nowDate = 0;
            }
            //this.selectedIndexArray = this.selectedIndexs();
            this.initDate(this.year, val);
        },
        year(val) {
            if (val == (new Date()).getFullYear() && this.month == (new Date()).getMonth() + 1) {
                this.nowDate = (new Date()).getDate();
            } else {
                this.nowDate = 0;
            }
            //this.selectedIndexArray = this.selectedIndexs();
            this.initDate(val, this.month);
        }
    }
}
</script>
<style lang="less">
    table{
        width: 100%;
        -webkit-border-bottom-right-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    table,tr, td{
        border-collapse:collapse;
        background: rgba(255,255,255,.4);
    }
    tr{
        border-bottom: 1px solid rgba(177,190,209,.5);
    }
    td{
        cursor:pointer;
        color:#000;
        border-right: 1px solid rgba(177,190,209,.5);
    }
    .date_main tr td:last-of-type {
        border-right: none;
    }
    th{
        border-collapse:collapse;
        background: rgba(128,128,128,.5);
        color: #FFF;
        font-size: 16px;
    }
    td, th{
        width: 50px;
        height: 40px;
        text-align: center;
        line-height:40px;
    }
    td.disabled{
        color: #B3B3B3;
        cursor:not-allowed;
    }
    td.active{
        background:yellowgreen;
        color:#fff;
    }
    .date-picker{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background:url('./page_bg.jpg') no-repeat;
        background-size: cover;
        padding-top:50px;
        box-sizing:border-box;
    }
    .slide-enter-active,.slide-leave-active{
        transition:0.7s;
     }
    .slide-enter,.slide-leave-to{
        transform: translate3d(100%,0,0);
    }
    .acePicterHeader{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
        height: 44px;
        background: #245AB1;
    }
    header.acePicterHeader a {
        display: inline-block;
        width: 58px;
        height: 44px;
        line-height: 44px;
        position: absolute;
        top: 0;
        color: #FFF;
        text-align: center;
    }
    header.acePicterHeader a.left {
        left: 16px;
    }
    header.acePicterHeader a.right {
        right: 16px;
    }
    .cal_main{
        padding: 5px 10px 10px;
    }
    .cal_main .date_header{
        text-align: center;
        height: 40px;
        background: -webkit-linear-gradient(top,#F0F3F6,#D8DBDE);
        -webkit-border-top-right-radius: 5px;
        -webkit-border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    .cal_main .date_header > div{
        display: inline-block;
    }
    .cal_year{
        float: left;
        margin: 6px 0 0 5px;
    }
    .cal_month{
        float: right;
        margin: 6px 5px 0 0;
    }
    .start_title{
        line-height:40px;
    }
    .cal_year,.cal_month{
        width: 50px;
        text-align: center;
        height: 25px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background: #EAF1FD;
        border: solid 1px #6395E2;
        line-height: 25px;
        padding: 0;
        color: #91B5EC;
    }
</style>
