import Vue from 'vue';
import btnTpl from './index.vue';

const Btn = {
    name: 'ace-btn',
    install(Vue) {
        Vue.component('ace-btn', btnTpl);
    },
    tpl: btnTpl
};

export default Btn;