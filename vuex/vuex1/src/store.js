import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 变量
    state: {
        count: 0
    },
    // 同步方法
    // 只有 mutations 中定义的函数，才有权利修改 state 中的数据
    mutations: {
        add(state) {
            state.count++;
        },
        addN(state, N) {
            state.count += N;
        },
        sub(state) {
            state.count--;
        },
        subN(state, N) {
            state.count -= N;
        }
    },
    // 异步方法
    // actions 中的异步方法不能直接修改 state 中的数据；
    // 必须通过 context.commit() 触发某个 mutation 才行
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add');
            }, 1000)
        },
        subAsync(context) {
            setTimeout(() => {
                context.commit('sub');
            }, 1500)
        }
    }

})