<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <!-- 页面上有表单,让光标自动聚焦
        按回车键,触发keyup.enter事件,触发addTodo方法 enter修饰符
      -->
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        @keyup.enter="addTodo"
      />
    </header>

    <section class="main" v-show="todos.length">
      <!-- 在做逻辑时,vue开发,要紧密关心数据状态的正确性 -->
      <input
        type="checkbox"
        class="toggle-all"
        id="toggle-all"
        :checked="allChecked"
      />
      <label for="toggle-all"></label>
      <ul class="todoList">
        <TodoItem
          v-for="(todo, index) in filterTodos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a
            :href="'#/' + key"
            :class="{ sellected: visibility === key }"
            @click="visibility = key"
          >
            {{ key }}
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";
import { ref, computed } from "vue";
//组件可以使用的数据状态 私有响应式数据ref  父组件提供的props
//computed 来源 ref,props, computed / vuex | pinia
//数据混在一起了 vue MVVM

// add/active/complted 不同的done
// todoList n TodoItem filterTodos = todos
//数据驱动页面
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  complete: (todos) => todos.filter((todo) => todo.done),
};
const visibility = ref("all"); //change
//容器 所有任务 store
const todos = ref([
  {
    id: 1,
    title: "吃饭",
    done: true,
  },
  {
    id: 2,
    title: "睡觉",
    done: false,
  },
  {
    id: 3,
    title: "打豆豆",
    done: true,
  },
]);

const allChecked = computed(() => {
  todos.value.every((todo) => todo.done);
}); //computed todos every

// computed  todos + visibility
const filterTodos = computed(() => filters[visibility.value](todos.value));

const remaining = computed(
  () => todos.value.filter((todo) => !todo.done).length
);
const addTodo = (e) => {
  const text = e.target.value;
  if (text.trim()) {
    todos.value.push({
      title: text,
      done: false,
    });
    e.target.value = "";
  }
};
</script>

<style scoped></style>
