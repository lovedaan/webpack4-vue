import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = resolve => require(['components/home.vue'], resolve);
const Search = resolve => require(['components/search.vue'], resolve);
const Profile = resolve => require(['components/profile.vue'], resolve);


export default new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '*',
        redirect: '/home'
    },{
        path: '/home',
        name: 'home',
        component: Home
    },{
        path: '/search',
        name: 'search',
        component: Search 
        }, {
            path: '/profile',
            name: 'profile',
            component: Profile
        }]
})