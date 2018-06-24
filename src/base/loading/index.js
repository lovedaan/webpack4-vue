import Vue from 'vue';
import loadingTpl from './loading.vue';
const hideLoading = () => {
    //如果已经存在就先删除这个节点
    if (document.querySelectorAll('.loadingWrap').length) {
        var loading = document.querySelectorAll('.loadingWrap')[0];
        loading.parentNode.removeChild(loading);
    }
};
const showLoading = (function () {
    hideLoading();
    let defaults = {
        visible: false,
        loadingText: '加载中...',
        time: null
    };
    const loadingCom = Vue.extend(loadingTpl);
    
    return function (opts) {
        opts = Object.assign({}, defaults, opts);
        const vm = new loadingCom({
            el: document.createElement('div'),
            data: {
                visible: opts.visible,
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
    }
})();

export {
    showLoading,
    hideLoading
}
