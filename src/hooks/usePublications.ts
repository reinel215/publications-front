import { useEffect, useState } from 'react';
import { getStatusPublications } from '../services/publicationService/getStatusPublications';
import { updatePublication } from '../services/publicationService/updatePublication';
import { PostDb, PostStatus } from '../types/Post';
import { PublicationsFilterParam } from '../services/publicationService/getStatusPublications';
import { likePublication } from '../services/publicationService/likePublication';
import { deleteLike } from '../services/publicationService/deleteLike';


//Este hook contiene la abstraccion de las publicaciones
export const usePublications = ({ filter }: { filter: PublicationsFilterParam }) => {

    const [publications, setPublications] = useState<PostDb[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    const getPublications = async () => {
        try {
            setLoading(true);
            const publications = await getStatusPublications(filter);
            setPublications(publications);
        } catch (error) {
            console.error("Error", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getPublications();
    }, [filter.sortBy, filter.user_id])


    //envian un update a la api para realiar un softdelete
    const onDelete = async (post: PostDb) => {
        try {
            setLoading(true);

            await updatePublication({ message: post.message, status: PostStatus.DELTED, post_id: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    //envian un update a la api para realizar un update al status
    const onPublish = async (post: PostDb) => {
        try {
            setLoading(true);

            await updatePublication({ message: post.message, status: PostStatus.PUBLISHED, post_id: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    //envian un post a la api para crear un like
    const like = async (post: PostDb) => {
        try {
            await likePublication({ postId: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        }
    }

    //envian un delete a la api para borrar un like
    const unLike = async (post: PostDb) => {
        try {
            await deleteLike({ postId: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        }
    }


    return {
        publications,
        onDelete,
        onPublish,
        like,
        unLike,
        loading
    }
}