<template>
    <div>
        <div class="head">
            <input type="text" name="" v-model="message">
            <button @click="submit">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        submit() {
            this.$emit('submit', this.message)
        }
    }
}
</script>

<style lang="css" scoped></style>