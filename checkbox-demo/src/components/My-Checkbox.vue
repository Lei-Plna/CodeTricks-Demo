<script setup lang="js">
defineProps({
  checked: Boolean
});
</script>

<template>
  <input
    type="checkbox"
    :checked="checked"
    @change="
      ($event) => {
        $emit('update:checked', $event.target.checked);
      }
    "
  />
  <p>Checked: {{ checked }}</p>
</template>

<style lang="css" scoped></style>
