<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                {{ todo.txt }}
            </li>
        </ul>
        <button type="button" @click="addTodo">Add Todo</button>
    </div>
</template>

<script setup>

const props = defineProps(['todos', 'addTodo'])

</script>

<style scoped></style>