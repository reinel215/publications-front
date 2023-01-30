import { getAxiosClient } from "../../helper/AxiosHelper";

const axiosClient = getAxiosClient();



export const deleteLike = async ({ postId }: { postId: string }) => {
    try {
        const response = (await axiosClient.delete(`/publications/unlike-publication/${postId}`, {
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en deleteLike service");
        throw error;
    }
}





