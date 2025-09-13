<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div v-for="item in fields" :key="item.name" class="mb-3">
        <label class="form-label text-white">{{ item.label }}</label>
        <input
          :type="item.type"
          class="form-control"
          v-model="item.value"
          aria-describedby="emailHelp"
        />
        <!-- ✅ lấy lỗi đúng theo name -->
        <small class="text-danger">{{ errors[item.name] }}</small>
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
}

// ✅ Schema validate
const schema = yup.object({
  email: yup.string().required('Not be empty').email('Email invalid'),
  password: yup.string().required('Not be empty').min(6, 'Password must be at least 6 characters'),
});

// ✅ Khởi tạo form với schema
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

// ✅ Config các field
const fieldDefs = ref<Field[]>([
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Password', type: 'password', name: 'password' },
]);

// ✅ Tạo reactive value cho từng field
const fields = fieldDefs.value.map((def) => {
  const { value } = useField<string>(def.name);
  console.log(value);

  return {
    ...def,
    value,
  };
});
console.log(fields);

// ✅ Xử lý submit
const handleLogin = handleSubmit((values) => {
  console.log('Form values:', values);
});
</script>
