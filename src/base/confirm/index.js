import Vue from 'vue';
import confirmTpl from './index.vue';

const Confirm = (opts) => {
    let options = {
        content: '确定要删除数据?',
        okBtnText: '确定',
        cancelBtnText: '取消',
        confirm: null,
        cancel: null
    };
    opts = Object.assign({}, options, opts);

    const confirmCom = Vue.extend(confirmTpl);

    const vm = new confirmCom({
        el: document.createElement('div'),
        data: {
            content: opts.content,
            okBtnText: opts.okBtnText,
            cancelBtnText: opts.cancelBtnText,
            visible:false
        },
        methods: {
            confirmOper() {
                vm.visible = false;
                setTimeout(() => {
                    document.body.removeChild(vm.$el);
                    opts.confirm && opts.confirm();
                }, 500);
            },
            cancelOper() {
                vm.visible = false;
                setTimeout(() => {
                    document.body.removeChild(vm.$el);
                    opts.cancel && opts.cancel();
                }, 500);
            }
        }
    });
    document.body.appendChild(vm.$el);
    vm.visible = true;
    return vm;
}

Confirm.install = (Vue) => {
    Vue.prototype.$confirm = Confirm;
}

export default Confirm;