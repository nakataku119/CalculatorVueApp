import { defineStore } from "pinia";

export const userCalculatorStore = defineStore("calculator", {
  state: () => ({
    numberDisplayed: 0,
  }),
});
