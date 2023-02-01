import { create } from 'zustand';
import { User } from '../../types/User';


interface UserDataStorageFilds {
    isAuth: boolean; //auth te dira si puede entrar a las rutas privadas
    setIsAuth: (isAuth: boolean) => void;
    user: User | null; //guarda el usuario que inicia sesion
    setUser: (user: User) => void;
}

export const useUserDataStore = create<UserDataStorageFilds>((set, get) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth }),
    user: null,
    setUser: (user) => set({ user })
}));
