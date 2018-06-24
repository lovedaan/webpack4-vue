import axios from 'axios';
import {showLoading, hideLoading} from 'base/loading/index.js';

// 请求开始发出
axios.interceptors.request.use(function (config) {
    if(!document.querySelectorAll('loadingWrap').length){
        showLoading({
            visible: true
        });
    }
    return config;
}, function (error) {
    hideLoading();
    return Promise.reject(error);
});

// 请求回来的
axios.interceptors.response.use(function (response) {
    hideLoading();
    return response;
}, function (error) {
    hideLoading();
    return Promise.reject(error);
});