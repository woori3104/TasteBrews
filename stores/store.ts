import { defineStore } from 'pinia';

export const useAbvGtStore = defineStore('abvGtStore', {
  state: () => ({
    abvGt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.abvGt = value;
    },
  },
});

export const useAbvLtStore = defineStore('abvLtStore', {
  state: () => ({
    abvLt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.abvLt = value;
    },
  },
});

export const useIbuGtStore = defineStore('ibuGtStore', {
  state: () => ({
    ibuGt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.ibuGt = value;
    },
  },
});

export const useIbuLtStore = defineStore('ibuLtStore', {
  state: () => ({
    ibuLt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.ibuLt = value;
    },
  },
});

export const useEbcGtStore = defineStore('ebcGtStore', {
  state: () => ({
    ebcGt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.ebcGt = value;
    },
  },
});

export const useEbcLtStore = defineStore('ebcLtStore', {
  state: () => ({
    ebcLt: undefined as number | undefined,
  }),
  actions: {
    setAbv(value: number) {
      this.ebcLt = value;
    },
  },
});
