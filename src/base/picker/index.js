import pickerTpl from './index.vue';

const Picker = {
    name: 'picker',
    install (Vue) {
        Vue.component('picker', pickerTpl);
    },
    tpl: pickerTpl
};

export default Picker;