import { User } from "./User";
export interface Post {
    image?: string;
    message: string;
    likes?: Array<User>;
    author: User;
    create_at: Date;
    location: string;
    status: PostStatus;
}

export type CreatePostRequest = Omit<Post, "likes" | "author" | "create_at" >

export const enum PostStatus {
    DRAFTED = "drafted",
    DELTED = "deleted",
    PUBLISHED = "published"
}

export interface PostDb extends Post {
    user_id: number;
    post_id: number;
}

export interface RemovePost {
    author: string;
    post_id: string;
}


export interface UpdatePost {
    message: string;
    status: PostStatus;
    author: string;
    post_id: string;
}


export interface Like {
    userId: string;
    postId: string;
    create_at?: Date;
}

export type InsertPost = Omit<Post, "create_at" | "likes">