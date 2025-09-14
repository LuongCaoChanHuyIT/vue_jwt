import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import type { AnyObjectSchema } from 'yup';
import type { Field } from '@/types/authType';

export function useFormBuilder(schema: AnyObjectSchema, fieldDefs: Omit<Field, 'value'>[]) {
  const { handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const fields = ref<Field[]>(
    fieldDefs.map((f) => {
      const { value } = useField<string>(f.name);
      return { ...f, value };
    })
  );

  return { fields, errors, handleSubmit };
}
