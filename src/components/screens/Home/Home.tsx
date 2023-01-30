import { Box, Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePublications } from '../../../hooks/usePublications';
import { PostStatus } from '../../../types/Post';
import { Publication } from '../../organism/Publication/Publication';

export const Home = () => {

    const history = useHistory();
    const { publications } = usePublications({ filter: { status: [PostStatus.PUBLISHED] } })


    return (
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >

            <Button variant="text" onClick={() => history.push("/create-publication")}>
                + Crear publicacion
            </Button>


            {
                publications.map(post => <Publication key={post.post_id} post={post} paperStyle={{ maxWidth: 400, width: "40%" }} />)
            }
        </Box>
    )
}