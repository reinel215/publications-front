import { create } from 'zustand';
import { User } from '../../types/User';


interface UserDataStorageFilds {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
    user: User | null;
    setUser: (user: User) => void;
}

export const useUserDataStore = create<UserDataStorageFilds>((set, get) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth }),
    user: null,
    setUser: (user) => set({ user })
}));
