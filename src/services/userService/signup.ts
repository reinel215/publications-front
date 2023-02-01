import { getAxiosClient } from "../../helper/AxiosHelper";


const axiosClient = getAxiosClient();

export interface SingupParams {
    username: string;
    surname: string;
    name: string;
    avatar:string;
}

//realiza un post a la api para craer un nuevo usuario
export const signup = async ({ username, surname, name, avatar }: SingupParams) => {

    try {
        const response = (await axiosClient.post("/users/register", {
            username,
            surname,
            name,
            role: "user",
            avatar,
        }
        )).data;

        return response
    } catch (error) {
        console.error("Error en signup service");
        throw error;
    }
}