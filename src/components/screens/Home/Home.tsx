import { Box, Button, ButtonGroup, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { usePublications } from '../../../hooks/usePublications';
import { PostStatus } from '../../../types/Post';
import { CreatePublicationButton } from '../../molecules/CreatePublicationButton/CreatePublicationButton';
import { Publication } from '../../organism/Publication/Publication';

export const Home = () => {

    const [sort, setSort] = useState("DESC");
    const { publications, like, unLike, loading } = usePublications({ filter: { status: [PostStatus.PUBLISHED], sortBy: sort } })

    return (
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >
            {
                loading ?
                    <CircularProgress />
                    :
                    <>
                        <CreatePublicationButton />

                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button onClick={() => setSort("ASC")}>ASC</Button>
                            <Button onClick={() => setSort("DESC")}>DESC</Button>
                        </ButtonGroup>



                        {
                            publications.map(post => <Publication
                                key={post.post_id}
                                post={post}
                                paperStyle={{ maxWidth: 400, width: "40%" }}
                                onClickLike={() => like(post)}
                                onClickUnlike={() => unLike(post)}
                            />)
                        }
                    </>
            }



        </Box>
    )
}