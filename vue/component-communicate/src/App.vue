<template>
  <div>
    <div class="head">
      <input type="text" name="" v-model="message">
      <button @click="submit">确定</button>
    </div>
    <div class="body">
      <ul>
        <li v-for="(item, id) in lists" :key="id">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
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