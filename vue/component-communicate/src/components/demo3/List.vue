<template>
    <div>
        <div class="body">
            <ul>
                <li v-for="(item, id) in list" :key="id">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: ['html', 'css']
        };
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    // watch: {
    //     msg(val) {
    //         console.log(val)
    //         this.lists.push(val)
    //     }
    // }
    computed: {
        list() {
            return this.lists.concat(this.msg)
        }
    }

}
</script>

<style lang="css" scoped></style>