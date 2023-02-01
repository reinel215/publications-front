import { getAxiosClient } from "../../helper/AxiosHelper";
import { useUserDataStore } from "../../store/user/userDataStore";


const axiosClient = getAxiosClient();

interface LoginParams {
    username: string;
}

//realiza un inicio de sesion y luego guarda el usuario y el auth en la store de zustand
export const login = async ({ username }: LoginParams) => {

    try {
        const response = (await axiosClient.post("/users/auth/login", {
            username: username,
            password: "any" //passport force me to send the password even if i am not going to use it
        },
        {
            withCredentials: true
        }
        )).data;

        useUserDataStore.getState().setIsAuth(true);
        useUserDataStore.getState().setUser(response.user);
        
        return response
    } catch (error) {
        console.error("Error en login service");
        throw error;
    }
}