import { getAxiosClient } from "../../helper/AxiosHelper";
import { useUserDataStore } from "../../store/user/userDataStore";


const axiosClient = getAxiosClient();

interface LoginParams {
    username: string;
}

export const login = async ({ username }: LoginParams) => {

    try {
        const response = (await axiosClient.post("/users/auth/login", {
            username: username,
            password: "any" //passport force me to send the password even if i am not going to use it
        }
        )).data;

        useUserDataStore.getState().setIsAuth(true);
        
        return response
    } catch (error) {
        console.error("Error en login service");
        throw error;
    }
}