import axios from 'axios';
import {Loading} from 'base';

// 请求开始发出
axios.interceptors.request.use(function (config) {
    Loading();
    return config;
}, function (error) {
    Loading.close();
    return Promise.reject(error);
});

// 请求回来的
axios.interceptors.response.use(function (response) {
    Loading.close();
    return response;
}, function (error) {
    Loading.close();
    return Promise.reject(error);
});