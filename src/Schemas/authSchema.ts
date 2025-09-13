import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Email not empty').email('Email Invalid'),
  password: yup.string().required('Password not empty').min(6, 'Password at least 6 characters'),
});
