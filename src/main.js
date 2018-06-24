import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'api/http.js';
import './common/css/base.less';

//自定义组件
//import message from 'base/alert/index.js';
import { Confirm } from 'base/index.js';
//Vue.use(message);
//Vue.use(Confirm);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: {
        App
    }
});