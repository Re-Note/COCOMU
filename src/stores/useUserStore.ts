import { ACCESS_TOKEN_KEY } from '@constants/api';
import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  userId: number | null;
  checkAuth: () => void;
  setUserId: (userId: number | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  userId: null,

  checkAuth: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    set((state) => ({
      isLoggedIn: !!token,
      userId: token ? state.userId : null,
    }));
  },

  setUserId: (userId) => set({ userId }),
}));
