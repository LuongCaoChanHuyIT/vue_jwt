<template>
  <div>
    <FormBase buttonName="Login" :onSubmit="handleLogin">
      <template v-for="field in fields">
        <InputField :field="field" :errors="errors" />
      </template>
    </FormBase>
    <div class="mt-3">
      <RouterLink to="/auth/register">Don't have an account? Register</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputField from '@/components/ui/InputField.vue';
import FormBase from '@/components/ui/FormBase.vue';
import { loginSchema } from '@/schemas/authSchema';
import { useFormBuilder } from '@/composable/useFormBuilder';
import { ref } from 'vue';
import { login } from '@/apis/auth';
import type { LoginData } from '@/types/authType';

const arrFields = ref([
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Password', type: 'password', name: 'password' },
]);
const { handleSubmit, errors, fields } = useFormBuilder(loginSchema, arrFields.value);

const handleLogin = handleSubmit(async (values) => {
  const data: LoginData = {
    email: values.email,
    password: values.password,
  };
  const res = await login(data);
  if (res.data.success) {
    alert('Login successful!');
  } else {
    alert('Login failed: ' + res.data.message);
  }
});
</script>
