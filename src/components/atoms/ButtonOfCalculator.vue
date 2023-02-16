<script setup lang="ts">
const props = defineProps({
  value: String,
});
</script>

<template>
  <button>
    {{ props.value }}
  </button>
</template>
