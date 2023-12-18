import { createStore } from "vuex"

const store = createStore({
    //公共数据源
    state() {  // data
        return {
            lists: ['html', 'css', 'js']
        }
    },
    mutations: {  // methods
        // 改变数据
        changeList(state, payload) {
            state.lists.push(payload)
        }
    },
})

export default store