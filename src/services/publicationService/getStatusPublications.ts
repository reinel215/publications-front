import { getAxiosClient } from "../../helper/AxiosHelper";
import { Post, PostDb, PostStatus } from "../../types/Post";

const axiosClient = getAxiosClient();

export interface PublicationsFilterParam {
    status: PostStatus[];
    user_id?: string;
}


export const getStatusPublications = async (filter: PublicationsFilterParam): Promise<PostDb[]> => {
    try {
        const response = (await axiosClient.get("/publications/", {
            params: {
                status: filter.status.join(","),
                user_id: filter.user_id
            },
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en getStatusPublications service");
        throw error;
    }
}





