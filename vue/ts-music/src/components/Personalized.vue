<template>
    <div>
        <ul>
            <li v-for="Mv in personalizedMv" :key="Mv.id">
                {{ Mv.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { usePersonalizedStore } from '../store/personalized';
const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore()

onMounted(async () => {
    await getPersonalized()
})

</script>

<style lang="scss" scoped></style>