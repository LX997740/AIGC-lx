import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      questionList: [],
      itemNum: 1,//第一题
      answer: []//答案id
    }
  },

  getters: {// computed
    rightAnswer(state) {
      let arr = []
      for (let question of state.questionList) {
        for (let answer of question.topic_answers) {
          if (answer.is_standard_answer === 1) {
            arr.push(topic_answers_id)
          }
        }
      }
      return arr
    }
  },
  // 同步修改数据源
  mutations: {// methods //同步的方式修改数据源
    getQuestionList(state, list) {
      state.questionList = list
    },
    //保存答案
    saveAnswer(state, id) {
      state.answer.push(id)
    },
    nextItem(state) {
      //下一题
      state.itemNum++
    }
  },

  actions: {// async methods
    getQuestionListAction({ commit }) { // context 整个store
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
        .then(res => {
          console.log(res.data)
          //触发getQuestionList方法
          commit('getQuestionList', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    saveAnswerAction({ commit, state }, id) {
      commit('saveAnswer', id)
      if (state.itemNum < state.questionList.length) {
        commit('nextItem')
      }

    },

  },
  modules: {

  }
})

