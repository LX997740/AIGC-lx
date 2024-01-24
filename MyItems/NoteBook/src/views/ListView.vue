<script setup lang="ts">
import { ref } from 'vue'
import { getNotes } from '@/api/note'
import type { NoteList } from '@/types'

const notes = ref([] as NoteList)
getNotes<NoteList>(1, 10).then((res) => {
  console.log(res)
  notes.value = res
})
</script>

<template>
  <div class="note-box">
    <div class="list-box">
      <div class="init-list">
        <div class="list-item" v-for="(item, index) in notes" :key="index">
          <div class="item-content">
            <p class="item-text">
              {{ item.content }}
            </p>
          </div>
          <div class="item-bottom">
            <p>
              {{ item.datas }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
