<template>
    <div>
        首页文章{{ props.item }}
    </div>
</template>

<script setup>
const props = defineProps({
    item:String
})
</script>

<style scoped></style>