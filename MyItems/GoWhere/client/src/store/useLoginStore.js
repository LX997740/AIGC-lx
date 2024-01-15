import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const username = ref("");
  const password = ref("");
  function login() {
    console.log(username.value, password.value);
  }
  return {
    username,
    password,
    login,
  };
});
