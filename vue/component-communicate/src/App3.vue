<template>
    <div>
        <Head @submit="handle" />
        <List :msg="message" />

    </div>
</template>
  
<script>
import List from '@/components/demo3/List.vue'
import Head from '@/components/demo3/Head.vue'

export default {
    components: {
        List,
        Head
    },

    data() {
        return {
            // lists: ['html', 'css'],
            message: ''
        };
    },

    methods: {
        handle(val) {
            this.message = val
            console.log(this.message)
        }
    },

};
</script>
  
<style lang="css"></style>