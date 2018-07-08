import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '';
axios.defaults.timeout = 60000;

export default {
    getMovie (type){
        return axios.get('/api/' + type,{
            params: {
                start: 0,
                count: 5
            }
        });
    }
};