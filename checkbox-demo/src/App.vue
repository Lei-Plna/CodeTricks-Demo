<script setup lang="ts">
import { ref } from "vue";
import MyCheckbox from "./components/My-Checkbox.vue";
const checked = ref(false);
</script>

<template>
  <div>
    <h1>Checkbox Demo</h1>
    <my-checkbox v-model:checked="checked"></my-checkbox>
  </div>
</template>

<style lang="css" scoped></style>
