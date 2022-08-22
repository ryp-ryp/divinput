import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

export default new Vuex.Store({
    // plugins: [
    //     createPersistedState({
    //         storage: window.sessionStorage,// 注意
    //         reducer(val) {
    //             return {
    //                 // 只储存state中的dasdad  整个reducer删除保存全部state
    //                 dasdad: val.dasdad
    //             }
    //         }
    //     })
    // ],
    state: {
        ceshishujuchijiuhua: 'dada',
        dasdad: 'sdadadad',
        qiantaoleixing:{
            informations:'meicuo'
        }
    },
    mutations: {
        gaibianshuju(state, step) {
            console.log(step);
            state.ceshishujuchijiuhua = step
        },
        gaibianshuju1(state, step) {
            console.log(step);
            state.dasdad = step
        },
    },
    actions: {
    },
    modules: {
    }
})
