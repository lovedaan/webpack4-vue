import Confirm from './confirm';
import Message from './alert';
import Loading from './loading';
import Btn from './btn';
import Picker from './picker';

const components = [Btn, Picker];

const install = function (Vue, opts = {}) {
    //js组件方式引用
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$message = Message;
    Vue.prototype.$loading = Loading;

    //标签组件方式引用
    components.forEach(component => {
        Vue.component(component.name, component.tpl);
    })
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Confirm,
    Message,
    Loading,
    Btn,
    Picker
};
export default {
    install
}