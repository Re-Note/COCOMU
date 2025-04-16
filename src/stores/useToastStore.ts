import { create } from 'zustand';

export type ToastType = 'default' | 'success' | 'error';

type Toast = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastStore = {
  toasts: Toast[];
  alert: (message: string) => void;
  error: (message: string) => void;
  success: (message: string) => void;
  removeToast: (id: number) => void;
};

export const useToastStore = create<ToastStore>((set) => {
  let idRef = 0;

  const removeToast = (id: number) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  };

  const addToast = (type: ToastType) => (message: string) => {
    const id = idRef;
    idRef += 1;

    set((state) => ({ toasts: [...state.toasts, { id, type, message }] }));

    setTimeout(() => removeToast(id), 4000);
  };

  return {
    toasts: [],
    alert: addToast('default'),
    error: addToast('error'),
    success: addToast('success'),
    removeToast,
  };
});
