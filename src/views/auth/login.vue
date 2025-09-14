<template>
  <div>
    <FormBase buttonName="Login" :onSubmit="handleLogin">
      <template v-for="field in fields">
        <InputField :field="field" :errors="errors" />
      </template>
    </FormBase>
  </div>
</template>

<script setup lang="ts">
import InputField from '@/components/ui/InputField.vue';
import FormBase from '@/components/ui/FormBase.vue';
import { loginSchema } from '@/schemas/authSchema';
import { useFormBuilder } from '@/composable/useFormBuilder';
import { ref } from 'vue';

const arrFields = ref([
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Password', type: 'password', name: 'password' },
]);
const { handleSubmit, errors, fields } = useFormBuilder(loginSchema, arrFields.value);

const handleLogin = handleSubmit((values) => {
  console.log('Form values:', values);
});
</script>
