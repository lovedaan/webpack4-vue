export default {
    SETCOUNTASYNC({
        commit
    }, n) {
        setTimeout(() => {
            commit('SETCOUNT', n);
        }, 2000);
    }
}