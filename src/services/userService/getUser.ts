import { getAxiosClient } from "../../helper/AxiosHelper";
import { User } from "../../types/User";

const axiosClient = getAxiosClient();

export interface GetUserParams {
    userId: string;
}


export const getUser = async ({ userId }: GetUserParams): Promise<User> => {
    try {
        const response = (await axiosClient.get(`/users/${userId}`, {
        })).data;

        return response
    } catch (error) {
        console.error("Error en getUser service");
        throw error;
    }
}





