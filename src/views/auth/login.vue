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
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import InputField from '@/components/ui/InputField.vue';
import FormBase from '@/components/ui/FormBase.vue';
import { loginSchema } from '@/Schemas/authSchema';
import type { Field } from '@/types/authType';

const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema,
});

const { value: emailValue } = useField<string>('email');
const { value: passwordValue } = useField<string>('password');

const fields = ref<Field[]>([
  { label: 'Email', type: 'email', name: 'email', value: emailValue },
  { label: 'Password', type: 'password', name: 'password', value: passwordValue },
]);

const handleLogin = handleSubmit((values) => {
  console.log('Form values:', values);
});
</script>
