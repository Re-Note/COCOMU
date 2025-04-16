import { create } from 'zustand';

interface ModalStore<T = Record<string, unknown>> {
  isOpen: boolean;
  modalType: string | null;
  modalProps: T;
  open: <U extends Record<string, unknown>>(type: string, props?: U) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  open: (type, props = {}) => set({ isOpen: true, modalType: type, modalProps: props }),
  close: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
