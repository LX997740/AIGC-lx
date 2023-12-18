<template>
    <div>
        <div class="body">
            <ul>
                <li v-for="(item, id) in list" :key="id">{{ item }}</li>
            </ul>
        </div>
        <!-- <button @click="changeProps">修改props</button> -->
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         list: []
    //     }
    // },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeProps() {
            this.list[0] = 'HTML'
        }
    }
}
</script>

<style lang="css" scoped></style>