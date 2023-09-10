import { defineStore } from 'pinia';

export const useAbvStore = defineStore('abvStore', {
  state: () => ({
    abv: 0,
  }),
  actions: {
    setAbv(value: number) {
      this.abv = value;
    },
  },
});