import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import type { AnyObjectSchema } from 'yup';
import type { Field } from '@/types/authType';

export function useFormBuilder(schema: AnyObjectSchema, fieldDefs: Omit<Field, 'value'>[]) {
  const { handleSubmit, errors, setFieldError } = useForm({
    validationSchema: schema,
  });

  const fields = ref<Field[]>(
    fieldDefs.map((f) => {
      if (f.name === 'email') {
        const { value } = useField<string>(f.name, undefined, {
          initialValue: 'admin@example.com',
        });
        return { ...f, value };
      } else {
        const { value } = useField<string>(f.name);
        return { ...f, value };
      }
    })
  );

  return { fields, errors, handleSubmit, setFieldError };
}
