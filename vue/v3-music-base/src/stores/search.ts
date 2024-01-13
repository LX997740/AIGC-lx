import { defineStore } from "pinia";
import { getSearchSuggest } from "@/api/index";
import type { SearchSuggest } from "@/models/search";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      showSearchView: false,
      searchKeyWord: "",
      suggestData: <SearchSuggest>{}, //singer ,album ...
    };
  },
  getters: {
    showHot: (state) => {
      return state.searchKeyWord === "";
    },
  },
  actions: {
    async suggest() {
      //和ref不一样 proxy
      this.suggestData = await getSearchSuggest(this.searchKeyWord);
    },
  },
});
