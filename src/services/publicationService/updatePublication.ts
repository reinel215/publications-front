import { getAxiosClient } from "../../helper/AxiosHelper";
import { CreatePostRequest, Post, PostStatus, UpdatePost } from "../../types/Post";

const axiosClient = getAxiosClient();



export const updatePublication = async (post: UpdatePost) => {
    try {
        const response = (await axiosClient.put(`/publications/${post.post_id}`, {
            message: post.message,
            status: post.status
        }, {
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en updatePublication service");
        throw error;
    }
}





