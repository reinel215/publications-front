import axios from 'axios';
import { getAxiosClient } from "../../helper/AxiosHelper";
import { useUserDataStore } from '../../store/user/userDataStore';
import { getUser } from './getUser';
import { login } from './login';
import { signup } from './signup';


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
        })
    };
    return {
        create: jest.fn(() => mAxiosInstance),
    };
});

useUserDataStore.getState().setIsAuth = jest.fn();
useUserDataStore.getState().setUser = jest.fn();

describe("Suite test for userService", () => {
    it("should make a get to the user", async () => {
        const axiosClient = getAxiosClient();
        const user = await getUser({ userId: "1" });
        expect(user).toEqual({
            username: "fulanito"
        });
        expect(axiosClient.get).toBeCalledWith(`/users/1`);
    })


    it("should make a post to the login service", async () => {
        const axiosClient = getAxiosClient();
        await login({ username: "1" });
        expect(axiosClient.post).toBeCalledWith(`/users/auth/login`, {
            username: "1",
            password: "any"
        },
            {
                withCredentials: true
            }
        );

        expect(useUserDataStore.getState().setIsAuth).toBeCalledWith(true);
        expect(useUserDataStore.getState().setUser).toBeCalledWith({});;

    })



    it("should make a post to the login service", async () => {
        jest.mock('axios', () => {
            const mAxiosInstance = {
                post: jest.fn().mockResolvedValue({
                    data: {
                        user: {}
                    }
                })
            };
            return {
                create: jest.fn(() => mAxiosInstance),
            };
        });

        const axiosClient = getAxiosClient();
        const response = await signup({ username: "fulanito", surname: "apellido", name: "nombre", avatar: "" });
        expect(axiosClient.post).toBeCalledWith(`/users/register`, {
            username: "fulanito",
            surname: "apellido",
            name: "nombre",
            role: "user",
            avatar: "",
        });

        expect(response).toEqual({user: {}})
    })
})