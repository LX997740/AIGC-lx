<template>
    <!-- <div class="w-56 h-56 bg-green-500"></div> -->
    <!-- 原子性 -->
    <div class="w-screen h-screen flex items-stretch">
        <div class="w-56 h-screen flex-shrink-0">
            <Menu />
        </div>
        <div class="flex-1 flex flex-col">
            <div class="h-14">
                <Header />
            </div>
            <div class="flex-1 overflow-hidden">
                <ElScrollbar>
                    <div class="container max-auto">
                        <router-view />
                    </div>
                </ElScrollbar>
            </div>
        </div>
    </div>
</template>

<script setup>

// import { onMounted } from 'vue'
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'

// import { getBanner, getSearchSuggest } from '@/utils/api'

// onMounted(async () => {
//     const data = await getBanner()
//     const res = await getSearchSuggest("海阔天空")
//     console.log(res)

// })
//请求发送的时机在何时?

</script>

<style scoped></style>