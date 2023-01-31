import { getAxiosClient } from "../../helper/AxiosHelper";
import { CreatePostRequest, Post, PostStatus } from "../../types/Post";

const axiosClient = getAxiosClient();


//create a new publication 
export const createPublication = async (post: CreatePostRequest) => {
    try {
        const response = (await axiosClient.post("/publications/", {
            image: post.image ,
            message: post.message,
            location: post.location,
            status: post.status //empiza como drafted
        }, {
            withCredentials: true
        })).data;

        return response
    } catch (error) {
        console.error("Error en createPublication service");
        throw error;
    }
}





