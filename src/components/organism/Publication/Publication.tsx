import { Avatar, Box, Link, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getStatusPublications } from '../../../services/publicationService/getStatusPublications';
import { Post, PostStatus } from '../../../types/Post';


interface PublicationProps {
    post: Post
}

export const Publication = ({ post }: PublicationProps) => {
    return (
        <Paper variant="outlined" style={{ maxWidth: 400, padding: 12, width: "40%" }} >
            <Box alignItems="center" flexDirection="row" display="flex" gap="5px">
                <Avatar alt="avatar" src={post.author.avatar} />
                <Typography variant="subtitle2" fontWeight="bold">
                    {`${post.author.name} ${post.author.surname}`}
                </Typography>

                <Link href="#" variant="body2">
                    {`@${post.author.username}`}
                </Link>

                <Typography variant="body2">
                    1d
                </Typography>
            </Box>


            <Box alignItems="center" flexDirection="row" display="flex" sx={{ marginTop: "10px", marginBottom: "10px" }}>


                <Typography variant="body2">
                    {`${post.message}`}
                </Typography>

            </Box>

            {
                post.likes.length ?
                    <Box alignItems="center" flexDirection="row" display="flex" gap="2px">

                        <Avatar alt="avatar" src={post.likes[0].avatar} sx={{ width: 24, height: 24 }} />
                        <Typography variant="subtitle2" fontWeight="bold">
                            Le gusta a
                        </Typography>

                        <Link href="#" variant="body2">
                            {` @${post.likes[0].username} `}
                        </Link>

                        <Typography variant="subtitle2" fontWeight="bold">
                            y
                        </Typography>

                        <Typography variant="body2">
                            {post.likes.length - 1} mas
                        </Typography>

                    </Box>

                    : null
            }

        </Paper>
    )
}