import { getAxiosClient } from "../../helper/AxiosHelper";
import { Post, PostStatus } from "../../types/Post";

const axiosClient = getAxiosClient();

interface PublicationsFilterParam {
    status: PostStatus[];
}


export const getStatusPublications = async (filter: PublicationsFilterParam): Promise<Post[]> => {
    try {
        const response = (await axiosClient.get("/publications/", {
            params: {
                status: filter.status.join(",")
            },
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en getStatusPublications service");
        throw error;
    }
}





