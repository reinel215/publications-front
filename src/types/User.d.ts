
export interface User {
    user_id: number;
    avatar?: string;
    username: string;
    name: string;
    surname: string;
    role: Roles;
}

export type UserRequest = Omit<User, "user_id"> 

export const enum Roles {
    ADMIN = "admin",
    USER = "user"
}

export interface UserSerialize {
    username: string,
    id: string | number
}
