<template>
    <div>
        <Header @add="handle" />
        <div class="body">
            <ul>
                <li v-for="(item, id) in lists" :key="id">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import Header from '@/components/demo2/Head.vue'
export default {
    components: {
        Header,
    },
    data() {
        return {
            lists: ['html', 'css'],
        };
    },
    methods: {
        handle(val) {
            console.log(val);
            this.lists.push(val)
        }
    }
};
</script>
  
<style lang="css"></style>