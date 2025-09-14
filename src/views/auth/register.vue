<template>
  <div>
    <FormBase buttonName="Login" :onSubmit="handleLogin">
      <template v-for="field in fields">
        <InputField :field="field" :errors="errors" />
      </template>
    </FormBase>
    <div class="mt-3">
      <RouterLink to="/auth">I have account? login</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputField from '@/components/ui/InputField.vue';
import FormBase from '@/components/ui/FormBase.vue';
import { registerSchema } from '@/schemas/authSchema';
import { useFormBuilder } from '@/composable/useFormBuilder';
import { ref } from 'vue';
import { register } from '@/apis/auth';

const arrFields = ref([
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Password', type: 'password', name: 'password' },
  { label: 'Confirm Password', type: 'password', name: 're-password' },
]);

const { handleSubmit, errors, fields, setFieldError } = useFormBuilder(
  registerSchema,
  arrFields.value
);

const handleLogin = handleSubmit(async (values) => {
  if (values.password !== values['re-password']) {
    console.log(errors);

    setFieldError('re-password', 'Password and Confirm Password do not match');
    return;
  }
  const data = {
    email: values.email,
    password: values.password,
  };
  const res = await register(data);
  console.log('Register response:', res);
});
</script>
