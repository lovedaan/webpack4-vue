import Vue from 'vue';
import loadingTpl from './loading.vue';

const Loading = (opts) => {
    if (Loading.$vm) {
        return;
    } 
    let defaults = {
        loadingText: '加载中...',
        time: null
    };
    const loadingCom = Vue.extend(loadingTpl);
    opts = Object.assign({}, defaults, opts);
    const vm = new loadingCom({
        el: document.createElement('div'),
        data: {
            visible: true,
            loadingText: opts.loadingText
        },
        mounted() {
            if (opts.time) {
                setTimeout(() => {
                    this.visible = false;
                    document.body.removeChild(vm.$el);
                }, opts.time);
            }
        }
    });

    document.body.appendChild(vm.$el);
    Loading.$vm = vm; 
}


Loading.close = () => {
    if (Loading.$vm && Loading.$vm.$el.parentNode){
        document.body.removeChild(Loading.$vm.$el);
    }
}

Loading.install = (Vue) => {
    Vue.prototype.$loading = Loading;
}

export default Loading;
