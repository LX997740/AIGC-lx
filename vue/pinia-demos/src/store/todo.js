//todo 数据管理模块 state actions 
import { defineStore } from "pinia";
import { ref } from "vue";
//vue3.0 hook函数
export const useTodoStore = defineStore("todo", () => {

    const todos = ref([
        { txt: "吃饭" },
    ])
    const addTodo = (txt) => {
        // todos.value.push({ txt })
        todos.value.push({ txt:'睡觉' })
    }
    return {
        todos,
        addTodo,
    }
})