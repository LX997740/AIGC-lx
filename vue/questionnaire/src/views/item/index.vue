<template>
    <div>
        <ItemContainer parent-Component="item" />
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from 'vuex'
export default {
    components: {
        ItemContainer
    },
    methods: {
        ...mapActions(['getQuestionListAction'])
    },
    created() {
        this.getQuestionListAction()
    }
}
</script>

<style lang="less" scoped></style>