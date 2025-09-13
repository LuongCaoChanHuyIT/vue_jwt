<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div v-for="field in fields" :key="field.name" class="mb-3">
        <label class="form-label text-white">{{ field.label }}</label>
        <input
          :type="field.type"
          class="form-control"
          v-model="field.value"
          :class="{ 'is-invalid': errors[field.name] }"
        />
        <small v-if="errors[field.name]" class="text-danger">
          {{ errors[field.name] }}
        </small>
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="w-100 btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

interface Field {
  label: string;
  type: string;
  name: string;
  value: any;
}

const schema = yup.object({
  email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
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

<style scoped>
.form-control.is-invalid {
  border-color: #dc3545;
}

.text-danger {
  font-size: 0.875em;
}
</style>
