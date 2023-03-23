<script setup lang="ts">
import ButtonsPart from "./components/molecules/ButtonsPart.vue";
import { userCalculatorStore } from "./stores/calculator";

const calculator = userCalculatorStore();
</script>

<template>
  <div class="p-3 mb-2 bg-light text-white border border-dark">
    <p class="bg-secondary text-white">
      {{ calculator.numberDisplayed }}
    </p>
    <ButtonsPart />
  </div>
</template>
