<template>
    <div>
        jMain
        <div class="item-list" v-for="item in items">
            <item :item="item" />
        </div>
    </div>
</template>

<script setup>
import item from './item.vue';
//提供数据模型
import { ref } from 'vue';
const items = ref([

]);
setTimeout(() => {
    items.value = [...items.value, 'item4']
}, 2000);
fetch('https://k9gtiz.laf.run/get-list')
    .then(res => res.json())
    .then(data => {
        items.value = data.data.map(item => item.txt);
    })
</script>

<style  scoped>
.item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #000;
}
</style>