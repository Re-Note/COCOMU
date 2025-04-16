import { useState } from 'react';

interface UseError<T> {
  errors: Partial<Record<keyof T, string>>;
  setError: (inputName: keyof T, message: string) => void;
  clearError: (inputName: keyof T) => void;
  clearAllErrors: () => void;
  hasErrors: boolean;
}

export function useError<T>(): UseError<T> {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const setError = (inputName: keyof T, message: string) => {
    setErrors((prev) => ({ ...prev, [inputName]: message }));
  };

  const clearError = (inputName: keyof T) => {
    setErrors((prev) => ({ ...prev, [inputName]: '' }));
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    setError,
    clearError,
    clearAllErrors,
    hasErrors: Object.values(errors).some((error) => error),
  };
}
