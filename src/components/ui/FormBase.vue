<template>
  <form @submit.prevent="onSubmit">
    <slot />
    <div class="d-flex justify-content-center">
      <button type="submit" class="w-100 btn btn-primary">{{ props.buttonName }}</button>
    </div>
  </form>
</template>
<script setup lang="ts">
const props = defineProps<{
  buttonName?: string;
  onSubmit?: () => void;
}>();
</script>
