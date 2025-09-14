<template>
  <div class="mb-3">
    <label class="form-label text-white">{{ props.field.label }}</label>
    <input
      :type="props.field.type"
      class="form-control"
      v-model="props.field.value"
      :class="{ 'is-invalid': props.errors[field.name] }"
      autocomplete="off"
    />
    <small v-if="errors[props.field.name]" class="text-danger">
      {{ errors[props.field.name] }}
    </small>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  field: {
    label: string;
    type: string;
    name: string;
    value: any;
  };
  errors: Record<string, string | undefined>;
}>();
</script>
<style scoped>
.form-control.is-invalid {
  border-color: #dc3545;
}

.text-danger {
  font-size: 0.875em;
}
</style>
