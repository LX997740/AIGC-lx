//hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";
import { usePersonalized } from "../api/index";
import type { Personalized } from "../models/personalized";


//仓库的分支,personalized
//专注于数据编程
export const usePersonalizedStore = defineStore("personalized", () => {
    const personalizedMv = ref<Personalized[]>([])
    const getPersonalized = async () => {
        const result = await usePersonalized()
        personalizedMv.value = result
    }

    return {
        personalizedMv,
        getPersonalized
    }
})