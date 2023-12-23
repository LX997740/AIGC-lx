<template>
    <div class="score">
        <h2>得分{{ Score }}</h2>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            Score: 0
        }
    },
    computed: mapState(['answer']),
    created() {
        this.calcScore()
    },

    computed: {
        ...mapState(['answer']),
        ...mapGetters(['rightAnswer'])
    },
    methods: {
        calcScore() {
            let every = 100 / this.rightAnswer.length
            this.answer.forEach((item, index) => {
                if(item === this.rightAnswer[index]){
                    this.Score += every
                }
            })
        }

    }
}
</script>

<style lang="less" scoped>
.score {
    color: yellow;

    h2 {
        color: #fff;
    }
}
</style>