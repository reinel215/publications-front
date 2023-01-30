import { getAxiosClient } from "../../helper/AxiosHelper";
import { useUserDataStore } from '../../store/user/userDataStore';
import { PostStatus } from "../../types/Post";
import { createPublication } from "./creatPublication";
import { deleteLike } from './deleteLike'
import { getStatusPublications } from "./getStatusPublications";
import { likePublication } from "./likePublication";
import { updatePublication } from "./updatePublication";


jest.mock('axios', () => {
    const mAxiosInstance = {
        get: jest.fn().mockResolvedValue({
            data: {
                username: "fulanito"
            }
        }),
        post: jest.fn().mockResolvedValue({
            data: {
                user: {}
            }
        }),
        delete: jest.fn().mockResolvedValue({
            data: {
                user: {}
            }
        }),
        put: jest.fn().mockResolvedValue({
            data: {
                user: {}
            }
        })
    };
    return {
        create: jest.fn(() => mAxiosInstance),
    };
});


describe("Suite test for userService", () => {
    it("should make a post to create a publication", async () => {
        const axiosClient = getAxiosClient();
        await createPublication({ image: "", message: "message", location: "ve", status: PostStatus.DRAFTED });
        expect(axiosClient.post).toBeCalledWith(`/publications/`, {
            image: "",
            message: "message",
            location: "ve",
            status: PostStatus.DRAFTED
        },
            {
                withCredentials: true
            }
        );
    })

    it("should make a delete to the like api", async () => {
        const axiosClient = getAxiosClient();
        await deleteLike({ postId: "1" });
        expect(axiosClient.delete).toBeCalledWith(`/publications/unlike-publication/1`,
            {
                withCredentials: true
            }
        );
    })


    it("should make a get to publications api", async () => {
        const axiosClient = getAxiosClient();

        await getStatusPublications({ status: [PostStatus.DRAFTED], user_id: "1", sortBy: "ASC" });

        expect(axiosClient.get).toBeCalledWith(`/publications/`,
            {
                params: {
                    status: PostStatus.DRAFTED,
                    user_id: "1",
                    sort: "ASC"
                },
                withCredentials: true
            }
        );
    })


    it("should make a post to like api", async () => {
        const axiosClient = getAxiosClient();

        await likePublication({ postId: "1" });

        expect(axiosClient.post).toBeCalledWith(`/publications/like-publication/1`, {},
            {
                withCredentials: true
            }
        );
    })


    it("should make a post to like api", async () => {
        const axiosClient = getAxiosClient();

        await updatePublication({ message: "message", post_id: "1", status: PostStatus.PUBLISHED });

        expect(axiosClient.put).toBeCalledWith(`/publications/1`, {
            message: "message",
            status: PostStatus.PUBLISHED
        },
            {
                withCredentials: true
            }
        );
    })
})