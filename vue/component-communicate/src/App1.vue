<template>
    <div>
        <div class="head">
            <input type="text" name="" v-model="message">
            <button @click="submit">确定</button>
        </div>
        <List :list="lists"/>
    </div>
</template>
  
<script>
import List from '@/components/demo1/List.vue'
export default {
    components: {
        List
    },
    methods: {
        submit() {
            if (!this.message) return
            this.lists.push(this.message)
            this.message = ''
        }
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: ''
        };
    }
};
</script>
  
<style lang="css"></style>