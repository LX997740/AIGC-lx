<template>
    <div>
        <div class="body">
            <ul>
                <li v-for="(item, id) in lists" :key="id">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState(['lists'])
}
</script>

<style lang="css" scoped></style>