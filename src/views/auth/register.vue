<template>
  <div>
    <FormBase buttonName="Register" :onSubmit="handleLogin">
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
import type { RegisterData } from '@/types/authType';
import { useRouter } from 'vue-router';

const router = useRouter();
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
  const data: RegisterData = {
    name: 'User',
    email: values.email,
    password: values.password,
  };
  const res = await register(data);
  const { data: resData } = res;
  if (resData.success) {
    alert('Register successfully, please login');
    router.push('/auth');
  } else {
    alert(resData.message || 'Register failed');
  }
});
</script>
