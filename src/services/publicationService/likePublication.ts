import { getAxiosClient } from "../../helper/AxiosHelper";

const axiosClient = getAxiosClient();



export const likePublication = async ({ postId }: { postId: string }) => {
    try {
        const response = (await axiosClient.post(`/publications/like-publication/${postId}`, {}, {
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en likePublication service");
        throw error;
    }
}





