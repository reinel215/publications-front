import { Avatar, Box, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getStatusPublications } from '../../../services/publicationService/getStatusPublications';
import { Post, PostDb, PostStatus } from '../../../types/Post';
import { Publication } from '../../organism/Publication/Publication';

export const Home = () => {

    const [publications, setPublications] = useState<PostDb[]>([]);
    const history = useHistory();

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
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >

            <Button variant="text" onClick={() => history.push("/create-publication")}>
                + Crear publicacion
            </Button>


            {
                publications.map(post => <Publication key={post.post_id} post={post} />)
            }
        </Box>
    )
}