import Confirm from './confirm/index.js';
import Message from './alert/index.js';

const install = function (Vue, opts = {}) {
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports= {
    install,
    Confirm,
    Message 
};
module.exports.default = module.exports;