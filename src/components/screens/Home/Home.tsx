import { Avatar, Box, Link, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getStatusPublications } from '../../../services/publicationService/getStatusPublications';
import { Post, PostStatus } from '../../../types/Post';
import { Publication } from '../../organism/Publication/Publication';

export const Home = () => {

    const [publications, setPublications] = useState<Post[]>([]);

    const getPublications = async () => {
        try {
            const publications = await getStatusPublications({ status: [PostStatus.PUBLISHED] });
            setPublications(publications);
        } catch (error) {
            console.error("Error", error);
        }
    }


    useEffect(() => {
        getPublications();
    }, [])


    return (
        <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%" }} >
            {
                publications.map(post => <Publication post={post} />)
            }
        </Box>
    )
}