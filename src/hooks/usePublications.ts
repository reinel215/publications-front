import { useEffect, useState } from 'react';
import { getStatusPublications } from '../services/publicationService/getStatusPublications';
import { updatePublication } from '../services/publicationService/updatePublication';
import { PostDb, PostStatus } from '../types/Post';
import { PublicationsFilterParam } from '../services/publicationService/getStatusPublications';

export const usePublications = ({ filter } : { filter: PublicationsFilterParam }) => {

    const [publications, setPublications] = useState<PostDb[]>([]);

    const getPublications = async () => {
        try {
            const publications = await getStatusPublications(filter);
            setPublications(publications);
        } catch (error) {
            console.error("Error", error);
        }
    }


    useEffect(() => {
        getPublications();
    }, [filter.sortBy])


    const onDelete = async (post : PostDb) => {
        try {
            await updatePublication({ message: post.message, status: PostStatus.DELTED, post_id: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        }
    }


    const onPublish = async (post : PostDb) => {
        try {
            await updatePublication({ message: post.message, status: PostStatus.PUBLISHED, post_id: post.post_id.toString() });
            await getPublications();
        } catch (error) {
            console.error(error);
        }
    } 


    return {
        publications,
        onDelete,
        onPublish
    }
}