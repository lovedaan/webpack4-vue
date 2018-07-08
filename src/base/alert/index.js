import Vue from 'vue';
import alertTpl from './index.vue';
const message = (opts) => {
    let options = {
        content: '确定要删除数据?',
        btnText: '确定',
        confirm: null
    };
    opts = Object.assign({}, options, opts);
    const messageCom = Vue.extend(alertTpl);

    const vm = new messageCom({
        el: document.createElement('div'),
        data: {
            content: opts.content,
            btnText: opts.btnText,
            visible: false
        },
        methods: {
            confirmOper() {
                vm.visible = false;
                setTimeout(() => {
                    document.body.removeChild(vm.$el);
                    opts.confirm && opts.confirm();
                }, 500);
            }
        }
    });

    document.body.appendChild(vm.$el);
    vm.visible = true;
    return vm;
};

message.install = (Vue) => {
    Vue.prototype.$message = message;
}

export default message;