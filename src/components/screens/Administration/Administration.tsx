import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { usePublications } from '../../../hooks/usePublications';
import { PostStatus } from '../../../types/Post';
import { Publication } from '../../organism/Publication/Publication';




export const Administration = () => {
    const { publications, onDelete, onPublish, like, unLike, loading } = usePublications({ filter: { status: [PostStatus.PUBLISHED, PostStatus.DRAFTED, PostStatus.DELTED] } })


    return (
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >

            {
                loading ?
                    <CircularProgress />
                    :
                    publications.map(post => <Publication
                        key={post.post_id}
                        post={post}
                        paperStyle={{ maxWidth: 400, width: "40%" }}
                        delatable
                        onDelete={onDelete}
                        publishable
                        onPublish={onPublish}
                        onClickLike={() => like(post)}
                        onClickUnlike={() => unLike(post)}
                    />
                    )


            }

        </Box>
    )
}