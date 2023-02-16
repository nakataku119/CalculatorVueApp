<script setup lang="ts">
import ButtonOfCalculator from "../atoms/ButtonOfCalculator.vue";
import { CommandManager } from "../../classes/CommandManager";
import { userCalculatorStore } from "../../stores/calculator";

const commandManager = new CommandManager();
const calculator = userCalculatorStore();
const numbersOfButton = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["0"],
];
const symbolsOfButton = [
  ["+", "-", "x"],
  ["÷", "="],
];

const onClickButton = (key: string) => {
  commandManager.addKey(key);
  updateNumberDisplayed();
};
const updateNumberDisplayed = () => {
  calculator.numberDisplayed = Number(commandManager.getNumber());
};

document.addEventListener("keydown", (event) => {
  if (event.key === "z" && event.metaKey) {
    if (event.shiftKey) {
      commandManager.redo();
    } else {
      commandManager.undo();
    }
    calculator.numberDisplayed = Number(commandManager.getNumber());
  }
});
</script>

<template>
  <button @click="onClickButton('CA')" class="btn btn-outline-danger w-100">
    CA
  </button>
  <div v-for="numbers in numbersOfButton">
    <ButtonOfCalculator
      v-for="number in numbers"
      :key="number"
      :value="number"
      @click="onClickButton(number)"
      class="btn btn-outline-primary"
    />
  </div>
  <div v-for="symbols in symbolsOfButton">
    <ButtonOfCalculator
      v-for="symbol in symbols"
      :key="symbol"
      :value="symbol"
      @click="onClickButton(symbol)"
      class="btn btn-outline-success"
    />
  </div>
</template>
