<template>
  <div>
    <Todolist :todos="todos" :addTodo="addTodo" />
    <!-- <Item /> -->
    <!-- <Bang :title="作者榜" :items="authors" /> -->
  </div>
</template>

<script setup>
// 以组件为开发单元·
// import { ref } from 'vue'
import { useTodoStore, } from './store/todo.js'
import Todolist from './components/TodoList.vue'
// const todos = ref([
//   { text: 'hhh' }
// ])
// todos来到 vuex/pinia

const { todos, addTodo } = useTodoStore()

// console.log(todoStore.todos);

</script >

<style lang="css" scoped></style>