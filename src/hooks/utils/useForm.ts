import { useState, FormEventHandler, ChangeEvent, FocusEvent } from 'react';
import { useError } from '@hooks/utils/useError';
import ValidationError from '@utils/errors/ValidationError';
import { useToastStore } from '@stores/useToastStore';

interface Field<T> {
  value: T;
  validate?: {
    onChange?: (value: T) => void;
    onBlur?: (value: T) => void;
  };
}

type FormFields<T> = {
  [K in keyof T]: Field<T[K]>;
};

interface UseFormProps<T> {
  initialValues: FormFields<T>;
}

export function useForm<TFieldData>({ initialValues }: UseFormProps<TFieldData>) {
  const [formState, setFormState] = useState(initialValues);
  const { errors, setError, clearError, clearAllErrors, hasErrors } = useError<Record<keyof TFieldData, string>>();

  const formData = Object.keys(formState).reduce((acc, key) => {
    const fieldName = key as keyof TFieldData;
    acc[fieldName] = formState[fieldName].value;
    return acc;
  }, {} as TFieldData);

  const validateAndSetErrors = <T extends keyof TFieldData>(fieldName: T, value: TFieldData[T]) => {
    const { validate } = formState[fieldName];

    try {
      validate?.onChange?.(value);
      clearError(fieldName);
      return true;
    } catch (err) {
      if (err instanceof ValidationError) setError(fieldName, err.message);
      return false;
    }
  };

  const handleSubmit =
    (callback: () => Promise<void>, excludeFields: (keyof TFieldData)[] = []): FormEventHandler<HTMLFormElement> =>
    async (e) => {
      const { error } = useToastStore.getState();
      e.preventDefault();
      clearAllErrors();

      let isValid = true;

      Object.keys(formState).forEach((key) => {
        const fieldName = key as keyof TFieldData;

        if (excludeFields.includes(fieldName)) return;

        const { value, validate } = formState[fieldName];

        try {
          validate?.onChange?.(value);
          validate?.onBlur?.(value);
          clearError(fieldName);
        } catch (err) {
          if (err instanceof ValidationError) {
            setError(fieldName, err.message);
            isValid = false;
            error(err.message);
          }
        }
      });

      if (isValid) {
        await callback();
      }
    };

  const updateFormData = <T extends keyof TFieldData>(fieldName: T, value: TFieldData[T]) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], value },
    }));
  };

  const register = <T extends keyof TFieldData>(fieldName: T) => ({
    name: fieldName,
    value: formState[fieldName].value as string,
    error: errors[fieldName],
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value as TFieldData[T];
      validateAndSetErrors(fieldName, newValue);
      updateFormData(fieldName, newValue);
    },
    onBlur: (e: FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value as TFieldData[T];
      if (formState[fieldName].validate?.onBlur) {
        validateAndSetErrors(fieldName, newValue);
      }
    },
  });

  const registerSelect = <T extends keyof TFieldData>(fieldName: T) => ({
    name: fieldName,
    values: formState[fieldName].value as number[],
    error: errors[fieldName],
    onSelect: (newValues: number[]) => {
      updateFormData(fieldName, newValues as TFieldData[T]);
      validateAndSetErrors(fieldName, newValues as TFieldData[T]);
    },
    onBlur: () => {
      validateAndSetErrors(fieldName, formState[fieldName].value as TFieldData[T]);
    },
  });

  return { formData, errors, register, registerSelect, handleSubmit, hasErrors };
}
