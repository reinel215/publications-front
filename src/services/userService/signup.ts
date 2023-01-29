import { getAxiosClient } from "../../helper/AxiosHelper";


const axiosClient = getAxiosClient();

export interface SingupParams {
    username: string;
    surname: string;
    name: string;
}

export const signup = async ({ username, surname, name }: SingupParams) => {

    try {
        const response = (await axiosClient.post("/users/register", {
            username: username,
            surname: surname,
            name: name,
            role: "user"
        }
        )).data;

        return response
    } catch (error) {
        console.error("Error en signup service");
        throw error;
    }
}