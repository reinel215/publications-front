import { create } from 'zustand';


interface UserDataStorageFilds {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

export const useUserDataStore = create<UserDataStorageFilds>((set, get) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth })
}));
