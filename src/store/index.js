import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
    count: 20
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})