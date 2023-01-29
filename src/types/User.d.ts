
export interface User {
    user_id: number;
    avatar?: string;
    username: string;
    name: string;
    surname: string;
    role: 'admin' | 'user';
}

export type UserRequest = Omit<User, "user_id"> 


export interface UserSerialize {
    username: string,
    id: string | number
}
