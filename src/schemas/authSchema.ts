import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Email not empty').email('Email Invalid'),
  password: yup.string().required('Password not empty').min(6, 'Password at least 6 characters'),
});

export const registerSchema = yup.object({
  email: yup.string().required('Email not empty').email('Email Invalid'),
  password: yup.string().required('Password not empty').min(6, 'Password at least 6 characters'),
  're-password': yup
    .string()
    .required('Confirm password not empty')
    .min(6, 'Confirm password at least 6 characters'),
});
